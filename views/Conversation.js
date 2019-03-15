import React, {Component} from 'react';
import {Image, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView} from "react-native";
import Header from "../components/Header";

export default class Conversation extends Component {
    state = {
        requestedLocationPermission: 'false',
    };

    componentDidMount = () => {

    };

    handleAutoLocationAllow = () => {

    };

    render() {
        return (
            <View style={styles.container}>
                <Header text={'Tom MLHA Kocmi'} />
                <View style={styles.innerContainer}>
                    <ScrollView style={styles.messages}>
                        <View style={styles.messageMy}>
                            <Image source={{uri: `https://velky-bratr.cz/photos/anonym/${this.props.match.params.id}.png`}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Tom MLHA Kocmi</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                        <View style={styles.messageMy}>
                            <Image source={{uri: 'https://velky-bratr.cz/photos/anonym/28.png'}}
                                   style={styles.messageImage}/>
                            <View style={styles.messageContent}>
                                <Text style={styles.messageName}>Anonym 28</Text>
                                <Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise Nemáš k
                                    dispozici žádné volné mise</Text>
                            </View>
                        </View>
                    </ScrollView>
                    <View style={styles.form}>
                        <TextInput style={styles.formInput}/>
                    </View>
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
        paddingTop: 50,
    },
    messages: {
        flex: 1,
        alignSelf: 'stretch',
    },
    text: {
        color: 'white',
    },
    messageMy: {
        color: 'white',
        flex: 0,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 5,
    },
    messageImage: {
        flex: 0,
        width: 50,
        height: 50,
        marginRight: 10,
    },
    messageContent: {
        flex: 1,
    },
    messageName: {
        color: '#5294d1',
        fontSize: 12,
        fontWeight: '500',
    },
    messageText: {
        color: 'white',
    },
    form: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    formInput: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },
});
