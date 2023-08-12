/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import BarraDrawer from '../components/BarraDrawer';
import ListColections from '../components/ListColections';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const MyColections = (props) => {

    return(
        <View style={styles.container}>
            <BarraDrawer title={'Minhas coleções'} navigation={props.navigation}/>
            <ListColections
                onPressEdit={(parametros) => {
                    props.navigation.push('EditarColecao', parametros)
                }}
                onPressItem={(parameters) => props.navigation.navigate('Colection', parameters)}
            />
            <View style={styles.containerButton}>
                <TouchableOpacity 
                    onPress={()=> props.navigation.push('CadastrarColecao')}
                >
                    <View style={styles.botaoAdd}>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: '300'}}>+</Text>
                    </View>
                </TouchableOpacity>
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#332E56',
        flex: 1,
    },
    containerButton: {
        display: 'flex',
        position: 'absolute',
        top: 590,
        left: 340
    },
    botaoAdd:{
        width: 50,
        height: 50,
        backgroundColor: '#7A71AF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }
});

export default MyColections;