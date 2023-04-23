import { View, Text,StyleSheet, Button} from 'react-native';
import { Color } from '../constants/Colors';
import React from 'react'

export default function LandingPage({navigation}) {

  function switchScreen()
  {
    console.log("clicked")
    navigation.navigate('Home')
  }


  return (
    <View style={styles.screen}>
      <Text style={styles.title}>LandingPage</Text>
      <Button onPress={switchScreen} title="press"></Button>
    </View>
  )
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:Color.primary800,
    },
    title:{
        color:'white',
        marginBottom:59
    },
    button:{
      marginTop:99
    }
})