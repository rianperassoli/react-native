import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: "Take a picture"
  });

  constructor(props) {
    super(props);    

    const codigo = props.navigation.getParam('codigo', null);
    const descricao = props.navigation.getParam('descricao', '');
    const imagem = props.navigation.getParam('imagem', null);

    this.state = { codigo, descricao, imagem };

    this.capturarFoto = this.capturarFoto.bind(this);
  }

  async capturarFoto() {

    if (this.camera) {

      const options = {
        quality: 0.5,
        base64: true
      };

      const data = await this.camera.takePictureAsync(options);

      this.setState({imagem: data.uri });
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
            source={{ uri: this.state.imagem }} />

          <View style={{ flexDirection: 'row' }}>

            <Button title="OK" onPress={
              () => this.props.navigation.navigate('Film', this.state)
            } />

            <Button title="Cancel" onPress={
              () => this.props.navigation.navigate('Film', this.state)
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
