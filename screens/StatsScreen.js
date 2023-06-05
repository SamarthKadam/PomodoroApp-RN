import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import Greet from '../utils/Greet'
import StatsBar from '../components/StatsBar'
import { getCompleted,getTotal,fetchTasks } from '../store/database'
import { useIsFocused } from '@react-navigation/native'
import LoadingOverlay from '../components/LoadingOverlay'

export default function StatsScreen() {


  const isFocused=useIsFocused();
  const[completedTask,setCompletedTask]=useState()
  const[totalTask,setTotalTask]=useState()
  const[remainingDuration,setRemainingDuration]=useState();

  async function getCompletedTasks()
  {
   const data=await getCompleted();
   setCompletedTask(data);
  }


  async function getTotalTasks()
  {
    const data=await getTotal();
    setTotalTask(data);

  }

  async function getRemainingDuration()
  {
    const data=await fetchTasks();
    console.log(data);
    const filtData=data.filter((val)=>val.completed!==1);

    console.log(filtData);

    let dur=0
    filtData.forEach((data)=>{
      dur+=(240-data.time)+(data.interval-data.compltdinterval-1)*240;
    })

    console.log(dur);

    setRemainingDuration(dur);
    // console.log(remainingDuration);

  }


  useEffect(()=>{

    if(isFocused)
    {
      getCompletedTasks();
      getTotalTasks();
      getRemainingDuration();
    }

  },[isFocused])



  if((!totalTask&&totalTask!==0) || (!completedTask&& completedTask!==0) || (!remainingDuration&& remainingDuration!==0))
  {
    return <LoadingOverlay message='Loading'></LoadingOverlay>
  }


  return (
    <View style={styles.screen}>
      <Greet>Status</Greet>
      <View style={styles.statsBarContainer}>
      <StatsBar val={remainingDuration} description='Estimated time (sec)'></StatsBar>
      <StatsBar val={totalTask} description='Total tasks in project '></StatsBar>
      <StatsBar val={completedTask} description='Completed tasks'></StatsBar>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    backgroundColor:Color.primary800,
    paddingHorizontal:24,
    paddingTop:84,
  },
  statsBarContainer:{
    marginTop:34
  }
})