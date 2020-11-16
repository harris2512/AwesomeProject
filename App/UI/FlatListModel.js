

import React from 'react';
import {
    StatusBar, Button, ToolbarAndroid, ScrollView,
    LayoutAnimation,
    StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Toast from 'react-native-simple-toast';
import { NavigationContainer } from '@react-navigation/native';

import Data from '../utils/localJson.json'

import CardModal from '../utils/CardModel'
import NavigationBar from 'react-native-navbar';

export default class FlatListModel extends React.Component {



    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.sectionTitle}>harris</Text>
            </View>
        );
    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    canvas: {
        resizeMode: "center",
        height: 80
    },
    buttonBG: {
        backgroundColor: '#069',
        width: 150,
        margin: 12,
        borderRadius: 5,
        padding: 12
    },
    buttonFont: {
        fontSize: 14,
        color: Colors.white,
        alignSelf: 'center',
        justifyContent: 'center',
    }


});