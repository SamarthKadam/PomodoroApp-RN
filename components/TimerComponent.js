import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export default function TimerComponent() {
  return (
    <View style={styles.timerContainer}>
    <CountdownCircleTimer
    isPlaying={true}
    duration={400}
    colors={[Color.secondary800]}
    colorsTime={[7]}
    size={300}
    strokeWidth={18}
    trailColor={Color.primary400}
    rotation='counterclockwise'
    onComplete={()=>{Alert.alert('Completed','Timer completed')}}
  >
    {({ remainingTime }) =>{
      const minutes=(Math.floor(remainingTime/60)).toString().padStart(2,'0');
      const seconds=(Math.floor(remainingTime%60)).toString().padStart(2,'0');
   return <Text style={styles.innerTextStyle}>{minutes}:{seconds}</Text>}
   }
  </CountdownCircleTimer>
  </View>
  )
}

const styles=StyleSheet.create({
  innerTextStyle:{
    color:'white',
    fontSize:54,
    fontWeight:'600'
  },
  timerContainer:{
    marginTop:80,
    flexDirection:'row',
    justifyContent:'center'
  }
})