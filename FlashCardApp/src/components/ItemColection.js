/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog from '../components/Dialog';

import {useDispatch} from 'react-redux';
import {delete_colecao} from '../reducers/colecaoSlice';

Icon.loadFont();

const ItemColection = props => {
    const {colecao, onPressItem, onPressEdit} = props;
    const {titulo, imagem, id} = colecao;

    const [visible, setVisible] = useState(false);
    const dispatch = useDispatch();

    return(
        <TouchableOpacity
            onPress={() => {
                onPressItem({titulo, id});
            }}
        >
            <View style={styles.container}>
                <Dialog 
                    visible={visible} 
                    message={"Você tem certeza que deseja excluir essa coleção?"}
                    cancelButton={true}
                    positiveButton={()=> {
                        dispatch(delete_colecao({id: id}))
                    }}
                    negativeButton={()=> setVisible(false)}
                />
                <View>
                    <Image source={{uri: imagem}} style = {styles.imagem}/>
                </View>
                <View style={styles.containerRotulo}>
                    <Text style={styles.rotulo}>{titulo}</Text>
                </View>
                <View style={styles.containerIcone}>
                    <View>
                        <TouchableOpacity onPress={()=> onPressEdit({colecaoEdit: colecao})}>
                            <Icon name='pencil' size={36} color='#4472C4'/>
                        </TouchableOpacity>  
                    </View>
                    <View style={{paddingTop: 30}}>
                        <TouchableOpacity onPress={() => {
                            setVisible(true)
                        }}>
                            <Icon name='trash' size={28} color='red' />
                        </TouchableOpacity>
                    </View>
                </View>
             </View>
        </TouchableOpacity>
        
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 126,
        marginBottom: 20,
        padding: 16,
        borderRadius: 10,
        borderWidth: 1,
        elevation: 1,
        borderColor: '#707070'
    },
    imagem: {
        width: 82,
        aspectRatio: 1,
    },
    containerRotulo:{
        display: 'flex',
        flex: 2,
        marginLeft: 26
    },
    rotulo: {
        fontSize: 36,
        fontFamily: 'tahoma-bold',
        fontWeight: 'bold',
        color: '#27ACA7'
    },
    containerIcone: {
        display: 'flex',
        alignItems: 'flex-end',
        flexDirection: 'column',
    }
})

export default ItemColection;