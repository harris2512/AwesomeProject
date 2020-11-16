import React from 'react';
import {
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Toast from 'react-native-simple-toast';


import ImagePicker from 'react-native-image-picker';





export default class Imagepicker extends React.Component {


    state = {
        avatarSource: null,
        videoSource: null,
    };

    constructor(props) {
        super(props);

        this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
        this.selectVideoTapped = this.selectVideoTapped.bind(this);
    }



    //init
    componentDidMount() {

    }

    //UI
    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View
                        style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
                        {this.state.avatarSource === null ? (
                            <Text>Select a Photo</Text>
                        ) : (
                                <Image style={styles.avatar} source={this.state.avatarSource} />
                            )}
                    </View>
                </TouchableOpacity>

                {/* <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        <Text>Select a Video</Text>
                    </View>
                </TouchableOpacity>

                {this.state.videoSource && (
                    <Text style={{ margin: 8, textAlign: 'center' }}>
                        {this.state.videoSource}
                    </Text>
                )} */}


            </View>
        );
    };


    //Functions

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium',
        };

        ImagePicker.showImagePicker(options, response => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                this.setState({
                    videoSource: response.uri,
                });
            }
        });
    }




}


//Css
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


    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        borderRadius: 15, //75
        width: 150,
        height: 150,
    }, 


});
