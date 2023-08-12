/* eslint-disable prettier/prettier */


import React, {useEffect, useState} from 'react';
import{View, Text, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Formulario from '../components/Formulario';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebaseconfig from '../util/firebaseconfig';

Icon.loadFont();

firebaseconfig;

const TelaLogin = (props) => {
    const [email, setEmail] = useState();
    const [senha,setSenha] = useState();
    const [message,setMessage] = useState();
    const [verSenha,setVerSenha] = useState(true);

    const loginUsuario = (email,password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            props.navigation.push('TelaInicial');
            
            setEmail("");
            setSenha("");
            setMessage("");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setMessage(getMessageError(errorMessage));
            console.log(errorMessage)
        });
    }

    const getMessageError = (code) => {
        switch(code){
            case "auth/user-not-found":
                return "Usuário não cadastrado.";
            case "auth/wrong-password":
                return "Senha incorreta."
            case "auth/invalid-email":
                return "E-mail inválido."
            default:
                return "Usuário ou Senha incorretos."
        }
    }

    const renderMessage = () => {
        if(!message)
        return null;

        return(
            <View>
                <Text style={styles.erroEmail}>{message}</Text>
            </View>
        );
    }   
    
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../imagens/cerebro.png')} style={styles.icone} />
                <Text style={styles.legenda}>Mind Booster</Text>
            </View>
            <View style={styles.containerInput}>
                <Text style={styles.rotuloEmail}>E-mail</Text>
                {renderMessage()}
                <Formulario>
                    <TextInput 
                        style={[styles.inputText, {marginBottom: 25}]}
                        value={email}
                        onChangeText={valor => {
                            setEmail(valor)
                        }}
                    />
                </Formulario>  
                <Text style={styles.rotuloSenha}>Senha</Text>
                <Formulario>
                    <TextInput 
                        style={[styles.inputText, {marginBottom: 8}]} 
                        secureTextEntry={verSenha}
                        value={senha}
                        onChangeText={valor => {
                            setSenha(valor)
                        }}
                    />
                        <View style={styles.olho}>
                        <TouchableOpacity onPress={()=> {
                            if(verSenha == true)
                                setVerSenha(false)
                            else
                                setVerSenha(true)
                        }}>
                            <Icon name='eye' size={25} color={'black'}/>
                        </TouchableOpacity>
                    </View>
                </Formulario>
                <Text style={styles.textEsqSenha}>Esqueci a senha</Text>
                <TouchableOpacity onPress={() =>{
                    loginUsuario(email,senha);
                }}>
                    <View style={styles.buttonEntrar}>
                        <Text style={styles.rotulo}>ENTRAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() =>{props.navigation.push('TelaCadastro')}}>
                <View style={styles.buttonCad}>
                    <Text style={styles.rotulo}>CADASTRE-SE</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 36,
        paddingTop: 65,
        backgroundColor: '#423F5D',
        flex: 1,
        justifyContent: 'space-between'
    },
    containerImage:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: 50,
    },
    legenda:{
        fontFamily: 'Pacifico',
        fontSize: 56,
        color: 'white'
    },
    containerInput:{
        display: 'flex',
        flexGrow: 1
    },
    buttonCad: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'#B58D97',
        borderColor: '#707070',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft:42,
        marginRight: 42
    },
    buttonEntrar: {
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#6A61A1',
        borderColor: '#707070',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft:42,
        marginRight: 42
    },
    inputText: {
        borderBottomWidth: 2,
        borderBottomColor: '#6200EE',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 12,
        backgroundColor: 'white',
        height: 56,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 25,
        fontSize: 16,
    },
    textEsqSenha: {
        display: 'flex',
        color: 'white',
        fontSize: 14,
        marginBottom: 22,
        textAlign:'right',
        marginRight: 42
    },
    rotulo: {
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    rotuloEmail: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        zIndex: 1,
        left: 58,
        top: 5
    },
    rotuloSenha: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        top: 85,
        left: 58,
        zIndex: 1
    },
    erroEmail:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#FF5353',
        position: 'absolute',
        zIndex: 1,
        left: 50,
        top: 55
    },
    olho:{
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        left: 330,
        top: 15
    }
});

export default TelaLogin;