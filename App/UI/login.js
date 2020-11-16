
import React from 'react';
import {
    StatusBar,
    StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image
} from 'react-native';

import Toast from 'react-native-simple-toast';


import { getUserInfo } from '../services/FetchUser';
import AppConstant from '../utils/AppConstants';


export default class login extends React.Component {


    state = {
        email: "",
        password: ""
    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />

                <Image
                    style={styles.canvas}
                    source={require('../resources/drawable/logo_with_whitestroke.png')}
                />
                <Text style={styles.logo}>MechApp</Text>

                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ email: text })} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#003f5c"
                        onChangeText={text => this.setState({ password: text })} />
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgot}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => {
                        const { email, password } = this.state;
                        if (email && password) {
                            // Alert.alert(email + "  " + password);
                        //   this.callLoginAPI();

                        //  this.props.navigation.navigate('Home')
                         this.props.navigation.navigate('Flatlist')

                        }
                    }}

                // onPress={
                //     this.sayHello
                // }

                >
                    <Text style={styles.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>Signup</Text>
                </TouchableOpacity>

            </View>

        );
    }


    sayHello = () => {
        const { email, password } = this.state;
        var bodyData = JSON.stringify({ password: password, mobileNo: email }).toString
        Toast.show(bodyData, Toast.LONG);
    }

    async callLoginAPI() {
        const { email, password } = this.state;

        const payload = {
            mobileNo: email,
            password: password
        };
        fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
           // body: JSON.stringify(payload)
        })
            .then((response) => response.json())
            //If response is in json then in success
            .then((responseJson) => {
                Alert.alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })

            //If response is not in json then in error
            .catch((error) => {
                Toast.show(JSON.stringify(error), Toast.LONG);
                console.error(error);
            });


    }



}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000",
        marginBottom: 30
    },
    inputView: {
        width: "80%",
        backgroundColor: "#f6f5f1",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "black"
    },
    forgot: {
        color: "white",
        fontSize: 11
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#ffc93c",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 10
    },
    loginText: {
        color: "white",
        fontWeight: "bold",

    },


    canvas: {
        resizeMode: "center",
        height: 80

    }


});





