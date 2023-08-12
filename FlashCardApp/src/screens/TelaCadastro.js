/* eslint-disable prettier/prettier */


import React, {useState} from "react";
import {View, Text, TextInput, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Formulario from "../components/Formulario";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const TelaCadastro = (props) => {
    const [email,setEmail] = useState();
    const [senha,setSenha] = useState();
    const [repetirSenha,setRepetirSenha] = useState();
    const [erro,setErro] = useState();
    const [verSenha,setVerSenha] = useState(true);
    const [verRepetirSenha,setVerRepetirSenha] = useState(true);

    const cadastrarUsuário = (email,password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // ...
            alert(
                "Usuário Cadastrado com Sucesso!!"
            )
            setEmail("")
            setSenha("")
            setRepetirSenha("")
            props.navigation.pop();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErro(errorMessage);
        });
    }
        
    return(
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../imagens/cerebro.png')} style={styles.image}/>
                <Text style={styles.legenda}>Mind Booster</Text>
            </View>
            <View style={styles.containerRotulo}>
                <Text style={styles.rotulo}>Preencha os dados do seu cadastro</Text>
            </View>
            <View>
                <Text style={styles.rotuloEmail}>E-mail</Text>
                <Formulario>
                    <TextInput 
                        style={styles.inputText}
                        value={email}
                        onChangeText={valor => {
                            setEmail(valor)
                        }}
                    />
                </Formulario>
                <Text style={styles.rotuloSenha}>Senha</Text>
                <Formulario>
                    <TextInput 
                        style={styles.inputText} 
                        secureTextEntry={verSenha}
                        value={senha}
                        onChangeText={valor => {
                            setSenha(valor)
                        }}
                    />
                </Formulario>
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
                <Text style={styles.rotuloRepSenha}>Repetir senha</Text>
                <Formulario>
                    <TextInput 
                        style={[styles.inputText, {marginBottom: 0}]}
                        secureTextEntry={verRepetirSenha}
                        value={repetirSenha}
                        onChangeText={valor => {
                            setRepetirSenha(valor)
                        }}
                    />
                </Formulario>
                <View style={styles.olho2}>
                    <TouchableOpacity onPress={()=> {
                        if(verRepetirSenha == true)
                            setVerRepetirSenha(false)
                        else
                            setVerRepetirSenha(true)
                    }}>
                        <Icon name='eye' size={25} color={'black'}/>
                    </TouchableOpacity>
                </View>
                    <Text style={styles.erroSenha}>{erro}</Text>
                <TouchableOpacity onPress={() => {
                    if(email == "" || senha == ""){
                        setErro("Email ou Senha Inválidos")
                    }else if(senha != repetirSenha){
                        setErro("Senha não confere")
                    }else{
                        cadastrarUsuário(email,senha);
                        setErro("")
                    }
                }}>
                    <View style={styles.buttonCadastrar}>
                        <Text style={{fontSize: 14, color: 'white', fontWeight: 'bold'}}>CADASTRAR</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#43405E'
    },
    containerImage: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        marginBottom:60
    },
    image: {
        width: 48,
        height: 42,
        marginRight: 10
    },
    legenda: {
        fontFamily: 'Pacifico',
        fontSize: 28,
        color: 'white'
    },
    containerRotulo: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 80
    },
    rotulo: {
        fontSize: 28,
        textAlign: "center",
        color: 'white'
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
    erroSenha:{
        color: '#FF5353',
        fontSize: 12,
        marginLeft: 58,
        marginBottom: 20
    },
    buttonCadastrar: {
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#6A61A1',
        borderColor: '#707070',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft:42,
        marginRight: 42,
    },
    rotuloEmail:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        left: 58,
        zIndex: 1,
        top: 5
    },
    rotuloSenha:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        zIndex: 1,
        top: 75,
        left: 58
    },
    rotuloRepSenha:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        top: 140,
        left: 58,
        zIndex: 1
    },
    olho:{
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        left: 330,
        top: 80
    },
    olho2:{
        position: 'absolute',
        display: 'flex',
        zIndex: 1,
        left: 330,
        top: 150
    }
})

export default TelaCadastro;