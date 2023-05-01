import { View,StyleSheet,Text, Alert} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
// import CircularProgress from 'react-native-circular-progress-indicator'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function Timer() {


  return (
    <View style={styles.screen}>
       <CountdownCircleTimer
    isPlaying
    duration={400}
    colors={['#32A846']}
    colorsTime={[7]}
    rotation='counterclockwise'
    onComplete={()=>{Alert.alert('Completed','Timer completed')}}
  >
    {({ remainingTime }) => <Text>{remainingTime/60}:{remainingTime%60}</Text>}
  </CountdownCircleTimer>
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:Color.primary800
  }
})