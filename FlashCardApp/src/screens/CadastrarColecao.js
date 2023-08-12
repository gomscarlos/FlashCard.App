/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

import Formulario from '../components/Formulario';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';
import {set_field, save_colecao, colecao_saved} from '../reducers/colecaoSlice';

Icon.loadFont();

const CadastrarColecao = (props) => {
    const dispatch = useDispatch();
    const colecao = useSelector((state) => state.colecao)

    return(
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.containerRotulo}>
                    <Text style={styles.rotulo}>Preencha os dados referente à coleção a ser criada</Text>
                </View>
                <View>
                    <Text style={styles.rotNome}>Nome coleção</Text>
                    <Formulario>
                        <TextInput 
                            style={styles.inputText}
                            value={colecao.titulo}
                            onChangeText={valor => {
                                dispatch(set_field({field: "titulo", value: valor}))
                            }} 
                        />
                    </Formulario>
                    <Text style={styles.rotDescricao}>Descrição</Text>
                    <Formulario>
                        <TextInput 
                            style={styles.inputText2}
                            value={colecao.descricao}
                            onChangeText={valor => {
                                dispatch(set_field({field: "descricao", value: valor}))
                            }} 
                            multiline
                        />
                    </Formulario>
                    <Text style={styles.rotImage}>Imagem</Text>
                    <View style={styles.containerButton}>
                        <View style={styles.buttonImage}>
                            <TextInput 
                                style={styles.inputText3}
                                value={colecao.imagem}
                                onChangeText={valor => {
                                    dispatch(set_field({field: "imagem", value: valor}))
                                }} 
                                multiline
                                numberOfLines={5}
                            />
                        </View>
                    </View>
                    <View style={{paddingTop: 12}}>
                        <TouchableOpacity 
                            onPress={()=> {
                                try{
                                    dispatch(save_colecao({colecao}))
                                    dispatch(colecao_saved())
                                    alert("Coleção inserida com sucesso!!")
                                }catch(error){
                                    alert("Erro: ", error.message)
                                }finally{
                                    props.navigation.pop();
                                }
                            }}
                        >
                            <View style={styles.buttonEntrar}>
                                <Text style={styles.rotuloButtonCad}>CADASTRAR</Text>
                            </View>
                        </TouchableOpacity>  
                    </View>
                    <View style={styles.containerButtonCancelar}>
                        <TouchableOpacity onPress={()=> props.navigation.pop()}>
                            <View style={styles.buttonCancelar}>
                                <Text style={styles.rotuloButtonCad}>CANCELAR</Text>
                            </View>    
                        </TouchableOpacity>    
                    </View> 
                </View>
            </View>
        </View>
    );
}

// <TouchableOpacity>
// <View style={styles.buttonImage}>
//     <Icon name='plus' size={46} color={'#B5B5B5'}/>
// </View>
// </TouchableOpacity>

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        backgroundColor: '#332E56',
        flex: 1,
    },
    containerItems:{
        display: 'flex',
    },
    containerRotulo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 42,
        paddingRight: 42,
        paddingTop: 34,
        paddingBottom: 44
    },  
    containerButton:{
        paddingLeft: 42,
        paddingRight: 42
    },
    containerButtonCancelar:{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 40
    },
    inputText:{
        borderBottomWidth: 2,
        borderBottomColor: '#6200EE',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 56,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        marginBottom: 12,
        paddingTop: 25
    },
    inputText2:{
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 80,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        marginBottom: 12,
        paddingTop: 22
    },
    inputText3:{
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        marginBottom: 12,
    },
    rotulo:{
        fontSize: 18,
        fontFamily: 'tahoma-bold',
        color: 'white',
        textAlign: 'center'
    },
    buttonImage:{
        height: 150,
        display: 'flex',
        backgroundColor: 'white',
        // justifyContent: 'center',
        // alignItems: 'center'
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
    rotuloButtonCad:{
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonCancelar: {
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#332E56',
        borderColor: 'white',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
        marginLeft:42,
        marginRight: 42
    },
    rotNome:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        zIndex: 1,
        left: 58,
        top: 5
    },
    rotDescricao:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        zIndex: 1,
        left: 58,
        top: 75
    },
    rotImage:{
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        zIndex: 1,
        left: 58,
        top: 165
    }
})

export default CadastrarColecao;