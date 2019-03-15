import React, {Component} from 'react';
import {Button, StyleSheet, Image, Text, TextInput, View} from 'react-native';
import {withRouter} from "react-router-native";

export default class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    constructor(props) {
        super(props);

        this.handleCredentials = this.handleCredentials.bind(this);
    }

    componentDidMount() {
        fetch('https://velky-bratr.cz/api/login/isLoggedIn', {
            method: 'POST',
            credentials: 'same-origin',
        })
            .then(result => {
                return result.json();
            })
            .then(result => {
                if (result.response === true) {
                    this.props.history.push('/location');
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    handleLogin = () => {
        let credentials = new FormData();
        credentials.append('login', this.state.email);
        credentials.append('password', this.state.password);
        credentials.append('permanentLogin', 'true');

        fetch('https://velky-bratr.cz/api/login/login', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: credentials,
        })
            .then(result => {
                return result.json();
            })
            .then(result => {
                console.log(result);
                this.props.history.push('/location');
            })
    };

    handleCredentials(name, value) {
        /*const name = event.target.name;
        const value = event.target.value;*/
        console.log(value);
        this.setState(() => ({[name]: value}));
    };

    checkLogin = withRouter(({history}) => {
        fetch('https://velky-bratr.cz/api/login/isLoggedIn', {

        })
            .then(result => {
                return result.json();
            })
            .then(result => {
                if (result.response != true) {
                    history.push('/location');
                }
            })
    });

    render() {
        return(
            <View style={styles.container}>
                <Image source={{uri: 'https://velky-bratr.cz/src/header.gif'}} style={{position: 'absolute', top: 0, flex: 1, left: '50%', right: 0, width: '100%', height: 50}}/>
                <View style={styles.innerContainer}>
                    <Text>Přihlášení</Text>
                    <TextInput
                        style={styles.input}
                        placeholder={'E-mail'}
                        autoCapitalize={'none'}
                        textContentType={'emailAddress'}
                        onChangeText={(e) => {this.handleCredentials('email', e)}}
                        value={this.state.email}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'Heslo'}
                        textContentType={'password'}
                        secureTextEntry={true}
                        onChangeText={(e) => {this.handleCredentials('password', e)}}
                        value={this.state.password}
                    />
                    <Button style={styles.button} color={'white'} onPress={this.handleLogin} title={'Přihlásit se'} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        margin: 10,
    },
    input: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: 'black',
        color: 'white',
    },
});
