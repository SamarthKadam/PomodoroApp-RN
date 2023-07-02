import { View,StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import TimerComponent from '../components/TimerComponent'
import TaskList from '../components/TaskList'
import { useIsFocused, useRoute } from '@react-navigation/native'
import Popup from '../components/Popup'
import { updateCmpCount,updatePopStatus} from '../store/database'
import { useNavigation } from '@react-navigation/native'
import { isCompletedUpdated } from '../store/database'

//This is TimerScreen

export default function Timer() {

  const route=useRoute();
  const navigation=useNavigation();
  const psdData=route.params.chosen;
  const [data,setdata]=useState(psdData[0]);


 const isFocused=useIsFocused();
 const [showTimer,setShowTimer]=useState(false);
 const[showPopUp,setShowPopUp]=useState();

 ///above are some states for maintening UI


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
 //When screen mounted its sets the data which is selected.



 async function updatingStatus(count)
 {
  await updateCmpCount(data.id,count)
 }

async function updatingIsCompletedStatus()
{
  await isCompletedUpdated(data.id);
}



 function updateStatus(count)
 {

  updatingStatus(count)
  setdata((data)=>{
    let temp=data;
    temp.compltdinterval=count;
    return temp;
  })

  if(data.interval===count)
  {
    updatingIsCompletedStatus();
    return navigation.navigate('ListAdd');
  }


 }





async function popupUpdation(val)
 {
  await updatePopStatus(data.id,val)
 }

 function showPop(val,interval)
 {
  setShowPopUp(val);
 }

 //Above are small utility functions which are used for handling UI.


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