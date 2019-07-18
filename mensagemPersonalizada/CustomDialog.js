import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { Dialog } from 'react-native-simple-dialogs';

class CustomDialog extends Component {

    render() {
        return (

            <View style={{ flex: 1 }}>
                <Dialog
                    visible={this.props.mostrarMensagem}
                    title="Custom Dialog"
                    onTouchOutside={this.props.close} >
                    <View>
                        <Text>LEGAL</Text>
                        <Button title="OK" onPress={this.props.close} />
                    </View>
                </Dialog>
            </View>
        );
    }
};

export default CustomDialog;