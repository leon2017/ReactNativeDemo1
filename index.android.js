/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';// js 严格模式

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

var HomeView = require('./src/home/Home.js')

export default class rndemo2 extends Component {
    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('rndemo2', () => rndemo2);
