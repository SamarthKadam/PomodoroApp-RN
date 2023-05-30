import { View,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import TimerComponent from '../components/TimerComponent'
import TaskList from '../components/TaskList'
import { useIsFocused, useRoute } from '@react-navigation/native'
import Popup from '../components/Popup'
import { updateCmpCount,updatePopStatus} from '../store/database'

export default function Timer() {

  const route=useRoute();
  const psdData=route.params.chosen;
  const [data,setdata]=useState(psdData[0]);

 const isFocused=useIsFocused();
 const [showTimer,setShowTimer]=useState(false);
 const[showPopUp,setShowPopUp]=useState();


 useEffect(()=>{
  if(isFocused)
  {
    setdata(psdData[0]);
    const val=psdData[0].showpopup===1?true:false;
    setShowPopUp(val);
    setShowTimer(true);
  }
  else{
    setShowTimer(false);
  }
 },[isFocused])




 async function updatingStatus(count)
 {
  await updateCmpCount(data.id,count)
 }



 function updateStatus(count)
 {
  updatingStatus(count)
  setdata((data)=>{
    let temp=data;
    temp.compltdinterval=count;
    return temp;
  })
 }





async function popupUpdation(val)
 {
  await updatePopStatus(data.id,val)
 }

 function showPop(val,interval)
 {
  setShowPopUp(val);
 }


  return (
    <View style={styles.screen}>
      {showPopUp&&<Popup message={`Take a rest of ${psdData[0].breaktime} min then play the timer`}></Popup>}
      <TaskList id={data.id} show={false} compltdinterval={data.compltdinterval} title={data.title} time={data.time} priority={data.priority} interval={data.interval} startTaskTimer={()=>{}} deleteTaskHandler={()=>{}}></TaskList>
     {showTimer&&<TimerComponent popupUpdation={popupUpdation} updateStatus={updateStatus} showPopUp={showPopUp} setShowPopUp={showPop} data={data}></TimerComponent>}
    </View>
  )
}
const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingTop:84,
    paddingHorizontal:10,
    backgroundColor:Color.primary800
  }
})