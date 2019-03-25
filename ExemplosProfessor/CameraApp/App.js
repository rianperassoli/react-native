/**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */
  
  'use strict';
  import React, { Component } from 'react';
  import {
    AppRegistry,
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
  } from 'react-native';
  import { RNCamera } from 'react-native-camera';
  
  export default class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        uri: ''
      }
    }
      
    takePicture = async function() {
      if (this.camera) {
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        let state = this.state;
        state.uri = data.uri;
        this.setState(state);
      }
    }    
      
    render() {
      return (
        <View style={styles.container}>
          <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
              style = {styles.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              permissionDialogTitle={'Permission to use camera'}
              permissionDialogMessage={'We need your permission to use your camera phone'}
          />
          <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
         >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          </View>
          <View style={{height: 150, width: 150}}>
            <Image style={{height: 100, width: 100}} source={{uri: this.state.uri}}/>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  });