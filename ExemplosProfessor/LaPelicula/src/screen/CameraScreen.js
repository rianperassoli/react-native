import React, { Component } from 'react';
import {
  View, Text, StyleSheet, Image, Button,
  TouchableOpacity
} from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CameraScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props);
    this.state = {
      uri: null
    }

    this.capturarFoto = this.capturarFoto.bind(this);
  }

  capturarFoto = async () => {
    // testar se o objeto da câmera foi criado
    if (this.camera) {
      // opções para captura
      const options = { quality: 0.5, base64: true };
      // captura da foto
      const data = await this.camera.takePictureAsync(options);
      let state = this.state;
      state.uri = data.uri;
      this.setState(state);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 2 }}>
          <RNCamera ref={ref => { this.camera = ref; }}
            captureAudio={false}
            style={styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.on}
            permissionDialogTitle={'Uso da câmera'}
            permissionDialogMessage=
            {'Precisamos de permissão para acessar a câmera!'}
          />
        </View>
        <View style={{
          flex: 0.5,
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Button title="Capturar"
            onPress={() => this.capturarFoto()} />
        </View>
        <View style={{ flex: 1.5, 
        justifyContent: 'center', 
        alignItems: 'center'}}>
          <Image style={{
            borderWidth: 1, borderColor: 'black',
            height: 150, width: 150
          }}
            source={{ uri: this.state.uri }}
          />
          <View style={{ flexDirection: 'row'}}>
            <Button title="OK" onPress={
              () => this.props.navigation.navigate('Filme',
                { imguri: this.state.uri })
            } />
            <Button title="Cancelar" onPress={
              () => this.props.navigation.navigate('Filme')
            } />
          </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  }
});