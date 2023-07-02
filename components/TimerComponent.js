import { View, Text, StyleSheet,BackHandler,Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import Button from '../utils/Button'
import { Color } from '../constants/Colors'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer' ///used External library for displaying CircleTimer
import {useIsFocused, useNavigation } from '@react-navigation/native'
import { updateTask} from '../store/database'
import { playSound } from '../services/playSound'

export default function TimerComponent({popupUpdation,data,setShowPopUp,showPopUp,updateStatus}) {



  const PomoTime=25*60;
  ///Here 25 saying the Pomodoro is of 25Min

  let value=PomoTime-data.time;
  let isVerification=PomoTime;

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

  //Above useEffect hook is used to handle if user press BackButton





 const isFocused=useIsFocused();
 ///This is hook that is used to know wheather this component is viewed or not





  let dispMinutes;
  let dispSeconds;

  const navigation=useNavigation();
  const[isPlaying,setIsPlaying]=useState(false);
  const [key,setKey]=useState(0);

  ///some states declared


  async function updateTaskTime()
  {

    const minutes=Math.floor(dispMinutes);
    let seconds=Math.floor(dispSeconds);

    if(seconds===60)
    seconds=0;


    const time=minutes*60+seconds;
    await updateTask(data.id,time);
  }
  //updateTaskTime updated the time that is time elapsed for the given task.This would be called whenever user exits
  //the screen or when the screen is unmounted.


  async function resetTimer()
  {
    data.time=0;
    await updateTask(data.id,0);
  }

  useEffect(()=>{

    if(!isFocused)
    {
      setIsPlaying(false);
      if(showPopUp===false && isVerification!==PomoTime)
      {
      updateTaskTime();
      }
    }

  },[isFocused])

  //above useEffect takes care of updating the time whenever the screen component is unmounted



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
///Above is pause/play handler






  
  function exitTimer()
  {
    setIsPlaying(false);
    // if(showPopUp===false && value!==60);
    // {
    // updateTaskTime();
    // }
    navigation.navigate('ListAdd');
  }
  ///above is exithandler when exited will take to other screen





  return (
    <>
    <View style={styles.timerContainer}>
    <CountdownCircleTimer
    isPlaying={isPlaying}
    duration={PomoTime}
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
      dispMinutes=(25-(remainingTime/60));
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