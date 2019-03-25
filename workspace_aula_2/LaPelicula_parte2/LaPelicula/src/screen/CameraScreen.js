import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Take a picture"
  });

  constructor(props) {
    super(props);

    this.state = {
      uri: null
    }

    this.capturarFoto = this.capturarFoto.bind(this);
  }

  capturarFoto = async () => {

    if (this.camera) {

      const options = {
        quality: 0.5,
        base64: true
      };

      const data = await this.camera.takePictureAsync(options);

      let state = this.state;
      state.uri = data.uri;

      this.setState(state);

    }

  }

  render() {
    return (

      <View style={styles.main}>

        <View style={{ flex: 2 }}>

          <RNCamera
            style={styles.preview}
            ref={ref => { this.camera = ref; }}
            captureAudio={false}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Uso da câmera'}
            permissionDialogMessage={'Precisamos de permissão para utilizar a câmera.'}
          />

        </View>

        <View style={styles.buttonCapturar}>
          <Button title="Capturar" onPress={() => this.capturarFoto()} />
        </View>

        <View style={styles.viewCapturedImage}>

          <Image
            style={styles.capturedImage}
            source={{ uri: this.state.uri }} />

          <View style={{ flexDirection: 'row' }}>

            <Button title="OK" onPress={
              () => this.props.navigation.navigate('Film', { imguri: this.state.uri })
            } />

            <Button title="Cancel" onPress={
              () => this.props.navigation.navigate('Film')
            } />

          </View>

        </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonCapturar: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  viewCapturedImage: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  capturedImage: {
    borderWidth: 1,
    borderColor: 'black',
    height: 150,
    width: 150
  }
});
