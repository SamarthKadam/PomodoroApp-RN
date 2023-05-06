import { View,StyleSheet} from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import FormInput from '../components/FormInput'
import { insertTask } from '../store/database'
import { useNavigation } from '@react-navigation/native'

export default function AddTask() {

  const navigation=useNavigation();

async  function addTaskHandler(task)
  {
    await insertTask(task);
    navigation.navigate('List');
  }

  return (
    <View style={styles.screen}>
        <FormInput onaddTask={addTaskHandler}></FormInput>
    </View>
  )
}

const styles=StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor:Color.primary800
    }
  })