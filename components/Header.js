import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export default class Header extends React.Component {
    render() {
        return(
            <React.Fragment>
                <Image source={{uri: 'https://velky-bratr.cz/src/header.gif'}} style={{
                    position: 'absolute',
                    top: 0,
                    flex: 1,
                    left: '50%',
                    right: 0,
                    width: '100%',
                    height: 50
                }}/>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{this.props.text}</Text>
                </View>
            </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        right: '35%',
        width: '65%',
        height: 50,
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 20,
    },
});
