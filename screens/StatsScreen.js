import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import Greet from '../utils/Greet'
import StatsBar from '../components/StatsBar'
import { getCompleted,getTotal } from '../store/database'
import { useIsFocused } from '@react-navigation/native'
import LoadingOverlay from '../components/LoadingOverlay'

export default function StatsScreen() {


  const isFocused=useIsFocused();
  const[completedTask,setCompletedTask]=useState()
  const[totalTask,setTotalTask]=useState()

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


  useEffect(()=>{

    if(isFocused)
    {
      getCompletedTasks();
      getTotalTasks();
    }

  },[isFocused])




  const estimatedTime=((completedTask*25)/60).toFixed(1);

  if((!totalTask&&totalTask!==0) || (!completedTask&& completedTask!==0))
  {
    return <LoadingOverlay message='Loading'></LoadingOverlay>
  }


  return (
    <View style={styles.screen}>
      <Greet>Status</Greet>
      <View style={styles.statsBarContainer}>
      <StatsBar val={estimatedTime} description='Estimated time (h)'></StatsBar>
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