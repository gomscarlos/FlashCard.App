/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Dialog from '../components/Dialog';
import { delete_flashcard } from '../reducers/flashcardSlice';
import {useDispatch} from "react-redux";

Icon.loadFont();

const ItemFlashCard = props => {
    const {flashcards, onPressEdit} = props
    const {id,frente,verso} = flashcards;
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);

    return(
        <View style={styles.container}>
            <Dialog 
                    visible={visible} 
                    message={"Você tem certeza que deseja excluir esse cartão?"}
                    cancelButton={true}
                    positiveButton={()=> dispatch(delete_flashcard({id: id}))}
                    negativeButton={()=> setVisible(false)}
            />
            <View style={styles.containerFrente}>
                <Text style={styles.rotulo}>Frente</Text>
                <Text style={styles.frenteVerso}>{frente}</Text>
            </View>
            <View style={styles.containerVerso}>
                <Text style={styles.rotulo}>Verso</Text>
                <Text style={styles.frenteVerso}>{verso}</Text>
            </View>
            <View style={styles.containerIcones}>
                <View>
                    <TouchableOpacity onPress={()=> onPressEdit({flashcardEdit: flashcards})}>
                        <Icon name='pencil' size={26} color='#4472C4'/>
                    </TouchableOpacity>  
                </View>
                <View style={{paddingLeft: 22}}>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Icon name='trash' size={24} color='red' />
                    </TouchableOpacity>
                </View>
            </View>
        </View>     
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        height: 74,
        marginBottom: 12,
        borderRadius: 10,
        justifyContent: 'space-between',
        padding: 16,
        borderWidth: 1,
        elevation: 1,
        borderColor: '#707070'
    },
    containerFrente:{
        marginTop: -4,
        width: 126
    },
    containerVerso:{
        display: 'flex',
        marginTop: -4,
        flexGrow: 1
    },
    containerIcones:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rotulo:{
        fontSize: 12,
        color: '#868686',
    },
    frenteVerso:{
        fontSize: 24,
        fontFamily: 'tahoma-bold',
        fontWeight: 'bold',
        color: '#27ACA7'
    }
})

export default ItemFlashCard;