import React, { useState } from 'react';
import axios from 'axios';
import { Input, Text, Button, Icon, Image, Card, InputProps } from 'react-native-elements';
import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

function HomeScreen({ navigation }) {

    const [showAlert, setShowAlert] = useState(false);
    const [msg, setMsg] = useState('');

    const [nombre, setNombre]= useState('');
    const [contraseña, setContraseña]= useState('');

    function showAlertt() {
        setShowAlert(true);
    }
    function hideAlert() {
        setShowAlert(false);
    }
    const [showAlertL, setShowAlertL] = useState(false);
    const [msgL, setMsgL] = useState('');

    function showAlerttL() {
        setShowAlertL(true);
    }
    function hideAlertL() {
        setShowAlertL(false);
        setContraseña('');
        setNombre('');
        navigation.navigate('sesion')
    }

    return (
        <View style={{ alignItems: 'center', height: Dimensions.get('window').height, width: Dimensions.get('window').width, backgroundColor: '#2b3dae' }}>
            <View style={{ height: Dimensions.get('window').height * 0.4, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/dcgvkvdwe/image/upload/v1627243677/Prueba/alumnos-online_lbyyxi.jpg' }}
                    style={{ width: Dimensions.get('window').width * 0.85, height: Dimensions.get('window').height * 0.25, borderRadius: 15 }}
                />
            </View>
            <View style={{ height: Dimensions.get('window').height * 0.6, alignItems: 'center' }}>
                <AwesomeAlert
                    show={showAlert}
                    showProgress={false}
                    title="Error"
                    message={msg + ''}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="red"
                    onConfirmPressed={() => {
                        hideAlert();
                    }}
                />
                <AwesomeAlert
                    show={showAlertL}
                    showProgress={false}
                    title="Info"
                    message={msgL + ''}
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={true}
                    showConfirmButton={true}
                    confirmText="Ok"
                    confirmButtonColor="green"
                    onConfirmPressed={() => {
                        hideAlertL();
                    }}
                />
                <Card containerStyle={{ height: Dimensions.get('window').height * 0.5, width: Dimensions.get('window').width * 0.85, borderRadius: 15 }}>
                    <Text h4 style={{ fontFamily: 'sans-serif-condensed', color: '#ada6e7' }}>Email address:</Text>
                    <Input
                        placeholder='Username'
                        onChangeText={(theText)=> setNombre(theText)}
                        leftIcon={
                            <Icon
                                name='email'
                                size={24}
                                color='black'
                            />
                        }
                    />
                    <Text h4 style={{ fontFamily: 'Roboto', color: '#ada6e7' }}>Password:</Text>
                    <Input placeholder="Password"
                        onChangeText={(theText)=> setContraseña(theText)}
                        leftIcon={
                            <Icon
                                name='security'
                                size={24}
                                color='black'
                            />
                        }
                        secureTextEntry={true} />

                    <Button
                        title=" Iniciar Sesion"
                        buttonStyle={{ width: Dimensions.get('window').width * 0.75, borderRadius: 14, backgroundColor: '#ef514c' }}
                        onPress={() => {
                            axios.post('http://8.9.37.125:8085/login', {
                                user: nombre,
                                password: contraseña
                            })
                                .then(function (response) {
                                    showAlerttL();
                                    setMsgL(JSON.stringify(response.data));
                                    console.log(JSON.stringify(response.data));
                                })
                                .catch(function (error) {
                                   showAlertt();
                                   setMsg(error);
                                    console.log(error);
                                });
                        }}
                        icon={
                            <Icon
                                name="send"
                                size={15}
                                color="white"
                            />
                        }
                    />
                    <Button
                        title="Registrarse"
                        buttonStyle={{ width: Dimensions.get('window').width * 0.75, borderRadius: 14, backgroundColor: '#648cfc', marginTop: 10 }}
                    />
                    <View style={{ flexDirection: 'row', height: Dimensions.get('window').height * 0.1, justifyContent: 'center', alignItems: 'center', width: Dimensions.get('window').width * 0.75 }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/dcgvkvdwe/image/upload/v1627244566/Prueba/search_izpdbp.png' }}
                                style={{ width: 30, height: 30, }}
                            />
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/dcgvkvdwe/image/upload/v1627244669/Prueba/facebook_d6vgv8.png' }}
                                style={{ width: 30, height: 30, }}
                            />
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                source={{ uri: 'https://res.cloudinary.com/dcgvkvdwe/image/upload/v1627244680/Prueba/instagram_v5fh25.png' }}
                                style={{ width: 30, height: 30, }}
                            />
                        </View>

                    </View>
                </Card>
            </View>
        </View>

    );

}
const styles = StyleSheet.create({
    headButton: {
        elevation: 0,
        marginTop: Dimensions.get('window').height * 0.012,
    },
    modal: {
        // backgroundColor: 'rgba(0, 0, 0, 0.42)',
        justifyContent: 'flex-end',
        height: Dimensions.get('window').height * 1.07,
    },
});

export default HomeScreen;