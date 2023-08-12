/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function HeaderDrawNav({title, navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.button}>
                <TouchableOpacity
                    onPress={()=> {navigation.openDrawer()}}
                >
                    <Icon name="bars" size={20} color='white'/> 
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.rotulo}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#4A4568',
        height: 56,
        alignItems: 'center'
    },
    button: {
        paddingHorizontal: 18
    },
    rotulo: {
        fontSize: 20,
        color: 'white',
        borderColor: 'black',
        fontWeight: "bold",
        fontFamily: 'Roboto-Medium'
    }
})