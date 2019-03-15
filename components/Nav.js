import React from 'react';
import {Link} from "react-router-native";
import {Platform, StyleSheet, Text, View} from "react-native";
import {getStatusBarHeight} from "react-native-status-bar-height";

export default class Nav extends React.Component {
    render() {
        return(
            <View style={styles.nav}>
                <Link to="/dashboard"><Text style={(this.props.location.pathname === '/dashboard') ? styles.activeLink : styles.link}>Přehled</Text></Link>
                <Link to="/location"><Text style={(this.props.location.pathname === '/location') ? styles.activeLink : styles.link}>Mapa</Text></Link>
                <Link to="/messages"><Text style={(this.props.location.pathname === '/messages') ? styles.activeLink : styles.link}>Zprávy</Text></Link>
            </View>
        );
    }
}

const STATUSBAR_HEIGHT = getStatusBarHeight();

const styles = StyleSheet.create({
    nav: {
        height: STATUSBAR_HEIGHT + 40,
        backgroundColor: '#000c17',
        flex: 0,
        color: 'white',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    link: {
        color: 'white',
    },
    activeLink: {
        color: '#f3c611',
    },
});
