import React from 'react';
import {View, StyleSheet} from 'react-native';

const Formulario = (props) => {
    const {children} = props;

    return (
        <View style={styles.container}>
            {children} 
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        elevation: 1,
        paddingLeft: 42,
        paddingRight: 42,
    }
})

export default Formulario;