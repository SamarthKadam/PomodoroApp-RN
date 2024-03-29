import { View, Text,StyleSheet,FlatList, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color } from '../constants/Colors'
import Greet from '../utils/Greet'
import Heading from '../utils/Heading'
import TaskList from '../components/TaskList'
import Button from '../utils/Button'
import EmptyTask from '../components/EmptyTask'
import { useNavigation } from '@react-navigation/native'
import { fetchTasks } from '../store/database'
import { useIsFocused } from '@react-navigation/native'
import { deleteTask } from '../store/database'
import CompletedStatus from '../components/CompletedStatus'
import LoadingOverlay from '../components/LoadingOverlay'


export default function List() {





  const [tasks,setTasks]=useState([]);
  const [completedTasks,setCompletedTasks]=useState([]);
  const isFocused=useIsFocused()
  const navigation=useNavigation();





  async function deleteTaskFunction(id)
  {
    setTasks((tasks)=>{

      return tasks.filter((task)=>task.id!==id)
    })

    setCompletedTasks((tasks)=>{
      return tasks.filter((task)=>task.id!==id);
    })
   await deleteTask(id);
  }
  //above function deleteTasks with specific id from state as well as database


  function deleteTaskHandler(id)
  {
    Alert.alert('Delete','Are You Sure To Delete This Task',[
      {
        text:'Cancel',
        onPress:()=>console.log("Cancel Pressed"),
        style:'cancel'
      },
      {
        text:'Okay',
        onPress:()=>deleteTaskFunction(id),
        style:'default'
      }
    ])
  }

  //Above function prompts the user wheather he is sure to delete the task.

  function startTaskTimer(id)
  {
   const chosen=tasks.filter((task)=>task.id===id)
   navigation.navigate('Timer',{chosen});
  }

  ///Above function is used to start the timer with specific task selected.
 


  useEffect(()=>{
    async function loadTasks()
    {
      const tasks=await fetchTasks();
      const pendingTasks=tasks.filter((data)=>data.completed===0)
      const completedTasks=tasks.filter((data)=>data.completed===1);
      setTasks(pendingTasks);
      setCompletedTasks(completedTasks);
    }
    if(isFocused)
    {
      loadTasks();
    }

  },[isFocused])

  ///Above useEffect function loadsall the tasks from the database.further they are added to their respective category

 function renderTasks(itemData)
 {
  const item=itemData.item;

  const taskprop={
    id:item.id,
    title:item.title,
    priority:item.priority,
    time:item.time,
    completed:item.completed,
    interval:item.interval,
    compltdinterval:item.compltdinterval,
    deleteTaskHandler:deleteTaskHandler,
    deleteTaskFunction:deleteTaskFunction,
    startTaskTimer:startTaskTimer,
    show:true

  }

  return <TaskList {...taskprop}></TaskList>

 }

 function addTaskHandler()
 {
  navigation.navigate('addTask');
 }



 let content=<FlatList data={tasks} keyExtractor={(item)=>item.id}  renderItem={renderTasks}></FlatList>


if(tasks.length===0)
{
  content=<CompletedStatus></CompletedStatus>
}



  return (
    <View style={styles.screen}>
      <Greet>Today</Greet>
      <Heading>All Tasks</Heading>
     {tasks.length>0||completedTasks.length>0?<View>
     <View style={styles.tasklistContainer}>
      {content}
      </View>
      <Heading style={styles.padbot}>Completed</Heading>
      <View style={styles.completedList}>
      <FlatList data={completedTasks} keyExtractor={(item)=>item.id}  renderItem={renderTasks}></FlatList>
      </View>
      </View>
      :null}
      {tasks.length===0||completedTasks.length>0?<EmptyTask></EmptyTask>:null}
      <Button onPress={addTaskHandler} style={styles.styleButton}>+ Add new task</Button>
    </View>
  )
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:18,
    paddingTop:54,
    position:'relative',
    backgroundColor:Color.primary800,
  },
  tasklistContainer:{
    height:280,
    width:'100%',
  },
  completedList:{
    width:"100%",
    height:150,
  },
  padbot:{
    marginBottom:14
  },
  styleButton:{
    marginTop:12,
    position:'absolute',
    top:'95%',
    alignSelf:'center',
    backgroundColor:'#00ADF8',
  }
})