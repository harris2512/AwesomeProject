import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, ActivityIndicator, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



export default class APICall extends React.Component {

    state = {
        apidata: null,

    }

    componentDidMount() {
        this.callLoginAPI()
    }

    render() {

        return (
            <View style={styles.container}>

                <Text style={styles.sectionTitle}>
                    GET :  'https://jsonplaceholder.typicode.com/todos/1'</Text>

                <Text style={styles.sectionTitle}>
                    Response :</Text>


                {this.state.apidata ?
                    (<Text style={styles.sectionResponses}>
                        {this.state.apidata}
                    </Text>)
                    : null}


            </View>
        );

    }


    //Functions
    async callLoginAPI() {

        fetch("https://jsonplaceholder.typicode.com/todos/1", {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ apidata: JSON.stringify(responseJson) })
            })

            //If response is not in json then in error
            .catch((error) => {
                Toast.show(JSON.stringify(error), Toast.LONG);
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
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 14,
        margin: 12,
        color: Colors.black,
    },
    sectionResponses: {
        fontSize: 16,
        backgroundColor:"#069",
        padding:12,
        color: Colors.white,
        textAlign: "center",
        margin: 12,

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