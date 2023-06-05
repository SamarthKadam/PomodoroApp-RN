import { View, Text, StyleSheet,BackHandler,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../utils/Button'
import { Color } from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import {useIsFocused, useNavigation } from '@react-navigation/native'
import { updateTask} from '../store/database'
import { playSound } from '../services/playSound'

export default function TimerComponent({popupUpdation,data,setShowPopUp,showPopUp,updateStatus}) {



  let value=240-data.time;
  let isVerification=240;

  useEffect(() => {
    const backAction = () => {

      setIsPlaying(false);
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);





 const isFocused=useIsFocused();





  let dispMinutes;
  let dispSeconds;

  const navigation=useNavigation();
  const[isPlaying,setIsPlaying]=useState(false);
  const [key,setKey]=useState(0);


  async function updateTaskTime()
  {

    const minutes=Math.floor(dispMinutes);
    let seconds=Math.floor(dispSeconds);

    if(seconds===60)
    seconds=0;


    const time=minutes*60+seconds;
    await updateTask(data.id,time);
  }


  async function resetTimer()
  {
    data.time=0;
    await updateTask(data.id,0);
  }

  useEffect(()=>{

    if(!isFocused)
    {
      setIsPlaying(false);
      if(showPopUp===false && isVerification!==240)
      {
      updateTaskTime();
      }
    }

  },[isFocused])



  function PauseTimer()
  {
    if(showPopUp==true)
    {
      popupUpdation(false);
      setShowPopUp(false,data.interval);
    }
    
    updateTaskTime();
    setIsPlaying((data)=>!data);

  }







  
  function exitTimer()
  {
    setIsPlaying(false);
    // if(showPopUp===false && value!==60);
    // {
    // updateTaskTime();
    // }
    navigation.navigate('ListAdd');
  }





  return (
    <>
    <View style={styles.timerContainer}>
    <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={240}
    key={key}
    initialRemainingTime={value}
    colors={[Color.secondary800]}
    colorsTime={[7]}
    size={300}
    strokeWidth={18}
    trailColor={Color.primary400}
    rotation='counterclockwise'
    onComplete={()=>{
      if(showPopUp!==true)
      {
      playSound();
      updateStatus(data.compltdinterval+1);
      resetTimer();
      popupUpdation(true);
      setKey((key)=>key+1);
      setShowPopUp(true,data.interval);
      setIsPlaying(false);

      }
    }}
  >
    {({ remainingTime }) =>{
      isVerification=remainingTime;
      dispMinutes=(4-(remainingTime/60));
      dispSeconds=(60-(remainingTime%60));

      if(remainingTime===0)
      dispSeconds=0;
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