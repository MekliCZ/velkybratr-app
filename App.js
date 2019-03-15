import React from 'react';
import {StatusBar, StyleSheet, Text, View, Platform, AsyncStorage} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {UserContext} from "./contexts/userContext";
import {NativeRouter, Route, Link, withRouter} from 'react-router-native';
import BackgroundTask from 'react-native-background-task';

import Login from "./views/Login";
import Location from "./views/Location";
import Messages from "./views/Messages";
import Nav from "./components/Nav";
import Conversation from "./views/Conversation";
import Dashboard from "./views/Dashboard";

const AppStatusBar = ({backgroundColor, ...props}) => (
    <View style={[styles.statusBar, {backgroundColor}]}>
        <StatusBar barStyle="light-content" backgroundColor={backgroundColor} {...props} />
    </View>
);

BackgroundTask.define(() => {
    // navigator.geolocation
    navigator.geolocation.getCurrentPosition((pos) => {
        let data = new FormData();
        let coords = pos.coords;
        data.append('latitude', coords.latitude);
        data.append('longitude', coords.longitude);
        data.append('locationManuallySelected', 'false');
        fetch('https://velky-bratr.cz/api/location/saveCoordinates', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
            },
            body: data,
        })
            .then(() => {
                console.log('background geolocation done');
                BackgroundTask.finish();
            })
            .catch(() => {
                BackgroundTask.finish();
            })
    }, (err) => {
        console.log(err);
        BackgroundTask.finish();
    }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    });
});

export default class App extends React.Component {
    componentDidMount() {
        BackgroundTask.schedule();
    }

    render() {
        return (
            <NativeRouter>
                <React.Fragment>
                    <View style={styles.container}>
                        <AppStatusBar backgroundColor="#000c17"/>
                        <Route exact path="/" component={Login}/>
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/location" component={Location}/>
                        <Route exact path="/messages" component={Messages}/>
                        <Route exact path="/conversation/:id" component={Conversation}/>
                    </View>
                    <Route path="/*" component={Nav} />
                </React.Fragment>
            </NativeRouter>
        );
    }
}

const STATUSBAR_HEIGHT = getStatusBarHeight();
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003466',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
        backgroundColor: 'pink',
        alignSelf: 'stretch',
    },
    appBar: {
        backgroundColor: '#000c17',
        height: APPBAR_HEIGHT,
    },
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
