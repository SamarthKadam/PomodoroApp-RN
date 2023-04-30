import { View, Text,StyleSheet,FlatList} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import Greet from '../utils/Greet'
import Heading from '../utils/Heading'
import TaskList from '../components/TaskList'
import Button from '../utils/Button'
import EmptyTask from '../components/EmptyTask'
import { useNavigation } from '@react-navigation/native'

let show=0;

export default function List() {

  const navigation=useNavigation();


  const DUMMY_TODOS=[{
    id:'1',
    priority:'high',
    title:'Mobile App Design',
    time:'25min',
 },{
    id:'2',
    priority:'medium',
    title:'Desktop Build',
    time:'25min',
 },
 {
    id:'3',
    priority:'low',
    title:'Study Languages',
    time:'25min',
 },
 {
  id:'4',
  priority:'low',
  title:'Study Languages',
  time:'25min',
},
{
  id:'5',
  priority:'low',
  title:'Study Languages',
  time:'25min',
}]

 function renderTasks(itemData)
 {
  const item=itemData.item;

  const taskprop={
    id:item.id,
    title:item.title,
    priority:item.priority,
    time:item.time,
  }

  return <TaskList {...taskprop}></TaskList>

 }

 function addTaskHandler()
 {
  navigation.navigate('addTask');
 }





  return (
    <View style={styles.screen}>
      <Greet>Today</Greet>
      <Heading>All Tasks</Heading>
     {show?<View>
      <View style={styles.tasklistContainer}>
        <FlatList data={DUMMY_TODOS} keyExtractor={(item)=>item.id}  renderItem={renderTasks}></FlatList>
      </View>
      <Heading style={styles.padbot}>Completed</Heading>
      <View style={styles.completedList}>
      </View>
      </View>
      :null}
      {!show?<EmptyTask></EmptyTask>:null}
      <Button onPress={addTaskHandler} style={styles.styleButton}>+ Add new task</Button>
    </View>
  )
}

const styles=StyleSheet.create({
  screen:{
    flex:1,
    paddingHorizontal:24,
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
    alignSelf:'center'
  }
})