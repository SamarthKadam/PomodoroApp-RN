import { View, Text,StyleSheet,Image} from 'react-native'
import React from 'react'
import Button from '../utils/Button'
import { Color } from '../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';

export default function StartComp() {

    const navigation=useNavigation();

    function switchScreen()
    {
      navigation.navigate('Home')
    }
  

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text style={[styles.text1,styles.text]}>Focused.</Text>
        <Text style={[styles.text2,styles.text]}>Motivated.</Text>
        <Text style={[styles.text3,styles.text]}>Disciplined.</Text>
        </View>
        <View style={styles.imgContainer}>
      <Image style={styles.img} source={require('../assets/work1.gif')}/>
        </View>
        <Button onPress={switchScreen}>Continue <AntDesign name="arrowright" size={24} color="white" /></Button>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:24,
        paddingVertical:38,
        backgroundColor:Color.primary800,
    },
    textContainer:{
        marginTop:40,
    },
    imgContainer:{
        marginTop:20,
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    img:{
      height:350,
      width:'90%'
    },
    text:{
        fontSize:42,
        fontWeight:'600',
    },
    text1:{
        color:'#ADD8E6',
    },
    text2:{
        color:'#8AC7DB',
    },
    text3:{
        color:'#67B7D1',
    },

  })