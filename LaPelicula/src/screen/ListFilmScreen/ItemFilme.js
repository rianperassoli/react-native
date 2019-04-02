import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
import { LPButton } from '../../components/LPButton';

var db = openDatabase({ name: 'lapelicula.db' });

const styles = StyleSheet.create({
    image: {
        height: 150
    },
    areaClick: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 10,
        paddingBottom: 10
    },
    description: {
        fontSize: 23,
        color: '#9304e0',
        fontWeight: 'bold'
    }
});

export default class ItemFilme extends Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.abrirTelaFilme = this.abrirTelaFilme.bind(this);
        this.excluirFilme = this.excluirFilme.bind(this);
    }

    abrirTelaFilme(data) {
        this.props.navigation.navigate('Film', { ...data, onSaved: this.props.onSaved });
    }

    excluirFilme(codigo) {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM filme WHERE codigo = ?', [codigo]);
        });

        this.props.onDeleted();
    }

    render() {

        const { data } = this.props;

        return (
            <View >
                <TouchableHighlight onPress={() => this.abrirTelaFilme(data)} underlayColor="blue" >

                    <ImageBackground resizeMode="cover" source={{ uri: data.imagem }} style={styles.image}>

                        <View style={styles.areaClick}>
                            <Text style={styles.description}>{data.descricao}</Text>
                        </View>

                    </ImageBackground>

                </TouchableHighlight>

                <LPButton titulo='Excluir'
                    onPress={() => this.excluirFilme(data.codigo)} />

            </View>
        );

    }
}


