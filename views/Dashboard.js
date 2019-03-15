import React, {Component} from 'react';
import {Image, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView} from "react-native";
import Header from "../components/Header";

export default class Dashboard extends Component {
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
                <Header text={'Přehled'} />
                <View style={styles.innerContainer}>
                    <ScrollView style={styles.messages}>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>Získaný vliv</Text>
                            </View>
                            <View style={styles.itemRight}>
                                <Text style={styles.itemRightText}>528</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>Barva dne</Text>
                            </View>
                            <View style={styles.itemRight}>
                                <Text style={styles.itemRightText}>HNĚDÁ</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>Získaný vliv</Text>
                            </View>
                            <View style={styles.itemRight}>
                                <Text style={styles.itemRightText}>528</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>Získaný vliv</Text>
                            </View>
                            <View style={styles.itemRight}>
                                <Text style={styles.itemRightText}>528</Text>
                            </View>
                        </View>
                        <View style={styles.item}>
                            <View style={styles.itemLeft}>
                                <Text style={styles.itemLeftText}>Získaný vliv</Text>
                            </View>
                            <View style={styles.itemRight}>
                                <Text style={styles.itemRightText}>528</Text>
                            </View>
                        </View>
                    </ScrollView>
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
        fontSize: 16,
    },
    item: {
        color: 'white',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 7.5,
        paddingBottom: 7.5,
    },
    itemLeftText: {
        color: '#5294d1',
        fontSize: 18,
    },
    itemRightText: {
        color: '#f3c611',
        fontSize: 18,
        fontWeight: '500',
    },
});
