/* eslint-disable prettier/prettier */
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import{View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import MyColections from './MyColections';
import Colection from './Colection';
import CadastrarColecao from './CadastrarColecao';
import EditarColecao from './EditarColecao'
import CadastrarFlashCard from './CadastrarFlashCard';
import TelaJogar from './TelaJogar';

Icon.loadFont();

const Drawer = createDrawerNavigator();

export default function TelaInicial(props){
    return(
        <Drawer.Navigator
            initialRouteName='MyColections'
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#25213E',
                    width: 250
                },
                drawerLabelStyle: {
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'Roboto-Regular',
                    textAlign: 'left',
                    marginLeft: -15,
                    width: 200
                },
            }}
            drawerContent={props => <CustomDrawer {...props}/>}
        >
            <Drawer.Screen
                name='Minhas coleções'
                component={MyColections}
                options={{
                    headerShown: false,
                    drawerIcon: config => <Icon name='sliders' size={25} color='white'/>
                }}
            />
            <Drawer.Screen 
                name='Colection'
                component={Colection}
                navigation={props.navigation}
                options={{
                    headerShown: false,
                    drawerItemStyle: {height:0, display: 'none'}
                }}
            />
            <Drawer.Screen
                name='CadastrarColecao'
                component={CadastrarColecao}
                navigation={props.navigation}
                options={{
                    headerShown: false,
                    drawerItemStyle: {height:0, display: 'none'}
                }}
            />
            <Drawer.Screen
                name='EditarColecao'
                component={EditarColecao}
                navigation={props.navigation}
                options={{
                    headerShown: false,
                    drawerItemStyle: {height:0, display: 'none'}
                }}
            />
            <Drawer.Screen
                name='CadastrarFlashCard'
                component={CadastrarFlashCard}
                navigation={props.navigation}
                options={{
                    headerShown: false,
                    drawerItemStyle: {height:0, display: 'none'}
                }}
            />
            <Drawer.Screen
                name='TelaJogar'
                component={TelaJogar}
                navigation={props.navigation}
                options={{
                    headerShown: false,
                    drawerItemStyle: {height:0, display: 'none'}
                }}
            />
        </Drawer.Navigator>
    );   
}

function CustomDrawer(props){
    return(
        <DrawerContentScrollView {...props}>
            <FotoPerfil />
            <DrawerItemList {...props}/>
            <DrawerItem
                onPress={()=> {props.navigation.popToTop()}}
                label="Logout"
                labelStyle={{color: 'white', fontFamily: 'Roboto-Regular', fontSize: 20}}
                icon={() => <Icon name='angle-left' size={25} color='white'/>}
            />
        </DrawerContentScrollView>
    );
}

function FotoPerfil(){
    return(
        <TouchableOpacity>
            <View style={styles.container}>
                <View>
                    <Image source={{uri: "https://randomuser.me/api/portraits/men/63.jpg"}}
                        style={styles.foto}
                    />
                </View>
                <View>
                    <Text style={styles.nomeUsuario}>Fernando Soares</Text>
                    <Text style={{color: 'white', fontWeight: '300'}}>_______________________________</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 35,
        paddingRight: 20,
        marginBottom: 20
    },
    foto:{
        width: 128,
        height: 128,
        borderRadius: 5,
        marginBottom: 12
    },
    nomeUsuario:{
        fontSize: 16,
        fontFamily: 'Roboto-Regular',
        color: 'white',
        textAlign: 'center',
        marginBottom: 15
    },
})