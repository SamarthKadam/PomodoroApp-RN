import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';

//This is Popup Component.Pops to show some relevant information

const Popup = ({ message }) => {

    return <View style={styles.modelCover}>
    <View style={styles.model}>
        <Text style={styles.text}>{message}</Text>
    </View>
    </View>
};

export default Popup;

const styles=StyleSheet.create({
    modelCover:{
        position:'absolute',
        top:'7%',
        width:'100%',
        flexDirection:'row',
        justifyContent:'center'
    },
    model:{
        backgroundColor:'#7088DE',
        paddingHorizontal:20,
        paddingVertical:12,
        borderRadius:20
    },
    text:{
        color:'white'
    }
})