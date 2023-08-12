/* eslint-disable prettier/prettier */
import React from "react";
import {View, Text, Modal, TouchableOpacity, StyleSheet} from 'react-native';

export default function Dialog(props){
    return(
        <Modal transparent visible={props.visible}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.rotulo}>{props.message}</Text>
                    <View style={styles.containerButtons}>
                        <View>
                            <TouchableOpacity onPress={props.positiveButton}>
                                <Text style={styles.rotOptions}>SIM</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {props.cancelButton && <TouchableOpacity onPress={props.negativeButton}>
                                <Text style={[styles.rotOptions]}>CANCELAR</Text>
                            </TouchableOpacity>}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
    },
    box:{
        width: 280,
        height: 128,
        backgroundColor: '#332E56',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#DED5EA',
        paddingTop: 25,
        paddingLeft: 20,
        paddingRight: 20
    },
    containerButtons:{
        display: 'flex',
        width: 240,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 18,
        paddingVertical: 20
    }, 
    rotulo:{
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: 'white',
    },
    rotOptions:{
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }
})