import { View, Text, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../utils/Button'
import { Color } from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {useNavigation } from '@react-navigation/native'
import { updateTask } from '../store/database'


export default function TimerComponent({data}) {





  let dispMinutes;
  let dispSeconds;
  console.log(data);

  const navigation=useNavigation();
  const[isPlaying,setIsPlaying]=useState(false);



  function PauseTimer()
  {

    setIsPlaying((data)=>!data);

  }

 async function updateTaskTime()
  {
    const minutes=Math.floor(dispMinutes);
    const seconds=Math.floor(dispSeconds);

    const time=minutes*60+seconds;
    await updateTask(data.id,time);
  }

  function exitTimer()
  {
    setIsPlaying(false);
    updateTaskTime();
    navigation.navigate('ListAdd');
  }








  let value=1500-data.time


  return (
    <>
    <View style={styles.timerContainer}>
    <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={1500}
    initialRemainingTime={value}
    colors={[Color.secondary800]}
    colorsTime={[7]}
    size={300}
    strokeWidth={18}
    trailColor={Color.primary400}
    rotation='counterclockwise'
    onComplete={()=>{Alert.alert('Completed','Timer completed')}}
  >
    {({ remainingTime }) =>{
      dispMinutes=(25-(remainingTime/60));
      dispSeconds=(60-(remainingTime%60));
      const minutes=(Math.floor(remainingTime/60)).toString().padStart(2,'0');
      const seconds=(Math.floor(remainingTime%60)).toString().padStart(2,'0');
   return <Text style={styles.innerTextStyle}>{minutes}:{seconds}</Text>}
   }
  </CountdownCircleTimer>
  </View>
  <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer1}><Button onPress={exitTimer} style={styles.btnBackBgColor}>Stop</Button></View>
        <View style={styles.buttonsContainer2}><Button onPress={PauseTimer} style={styles.btnBgColor} >{isPlaying?'Pause':'Play'}</Button></View>
      </View>
  </>
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
  },
  buttonsContainer:{
    marginTop:80,
    flexDirection:'row'
  },
  buttonContainer1:{
    flex:1,
    marginHorizontal:8,
  },
  buttonsContainer2:{
    flex:1,
    marginHorizontal:8,
  },
  btnBgColor:{
    backgroundColor:Color.secondary800
  },
  btnBackBgColor:{
    backgroundColor:'#37394C'
  }
})