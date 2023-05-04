import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { Color } from '../constants/Colors'
import Greet from '../utils/Greet'
import StatsBar from '../components/StatsBar'

export default function StatsScreen() {
  return (
    <View style={styles.screen}>
      <Greet>Status</Greet>
      <View style={styles.statsBarContainer}>
      <StatsBar val={5.2} description='Estimated time (h)'></StatsBar>
      <StatsBar val={4} description='Total tasks in project '></StatsBar>
      <StatsBar val={2} description='Completed tasks'></StatsBar>
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