import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Toast from 'react-native-simple-toast';

import MapView, { PROVIDER_GOOGLE }  from 'react-native-maps';
import { Marker } from 'react-native-maps';


const {width, height} = Dimensions.get('window')
const ASPECT_RATIO = width / height;

export default class GoogleMaps extends React.Component {


    //Init

    //UI
    render() {
        return (
            <View style={styles.MainContainer}>

                <MapView
                    style={styles.mapStyle}
                    provider={MapView.PROVIDER_GOOGLE}
                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    zoomEnabled={true}
                    zoomControlEnabled={true}
                  
                    initialRegion={{
                        latitude: 28.579660,
                        longitude: 77.321110,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0922 * ASPECT_RATIO,
                    }}
                    
                    
                    >


                    <Marker
                        coordinate={{ latitude: 28.579660, longitude: 77.321110 }}
                        title={"ReadyAssist"}
                        description={"Road Assistant services."}
                        pinColor = "red"
                        // image = {require("./assets/custum_icon.png")}
                    />
                </MapView>

            </View>
        );
    };


    //Functions

}


//StyleSheet
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
    },

    MainContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },

});