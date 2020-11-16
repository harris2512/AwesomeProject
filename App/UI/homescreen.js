import React from 'react';
import {
    StatusBar, Button,ToolbarAndroid,
    StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Toast from 'react-native-simple-toast';
import { NavigationContainer } from '@react-navigation/native';



export default class HomeScreen extends React.Component {

    state = {
        name: "",
        password: ""
    }

    componentDidMount() {
        //  this.setState({ name: this.props.name })
    }

    render() {
        return (

            <View style={styles.container}>
                {/* <Text style={styles.sectionTitle}>harris</Text> */}

                <StatusBar backgroundColor="blue" />

                <TouchableOpacity style={styles.buttonBG}
                    onPress={() => {
                        this.props.navigation.navigate('Location', { name: 'g' })
                    }}
                >
                    <Text style={styles.buttonFont}>Location Dialog</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBG}
                    onPress={() => {
                        this.props.navigation.navigate('Maps', { name: 's' })
                    }}
                >
                    <Text style={styles.buttonFont}>Google Map</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBG}
                    onPress={() => {
                        this.props.navigation.navigate('API', { name: 'g' })
                    }}
                >
                    <Text style={styles.buttonFont}>API call</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonBG}
                    onPress={() => {
                        this.props.navigation.navigate('Imagepick', { name: 'g' })
                    }}
                >
                    <Text style={styles.buttonFont}>Image Picker</Text>
                </TouchableOpacity>

            </View>



        );

    };


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