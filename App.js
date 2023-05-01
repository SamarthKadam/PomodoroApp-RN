import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPageScreen';
import Timer from './screens/TimerScreen';
import List from './screens/ListScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import StatsScreen from './screens/StatsScreen';
import { Color } from './constants/Colors';
import { StyleSheet } from 'react-native';
import AddTask from './screens/AddTask';

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();



function ListAdd({navigation})
{
  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}}  name='List' component={List}></Stack.Screen>
      <Stack.Screen options={{}}  name='addTask' component={AddTask} ></Stack.Screen>
    </Stack.Navigator>
  )
}


function HomePage()
{
  return <Tab.Navigator  screenOptions={{tabBarItemStyle:{backgroundColor:Color.primary600},headerShown:false,tabBarShowLabel:false,tabBarActiveTintColor:'#6E7DFF'}}>
     <Tab.Screen name='ListAdd' options={{tabBarStyle:{borderTopWidth:0,height:80},tabBarIcon:({color})=><FontAwesome name="th-list" size={30} color={color} />}} component={ListAdd}></Tab.Screen>
     <Tab.Screen name='Timer' options={{tabBarStyle:{borderTopWidth:0,height:80},tabBarIcon:({color})=><MaterialCommunityIcons name="timer" size={30} color={color} />}} component={Timer}></Tab.Screen>
     <Tab.Screen name='Stats'options={{tabBarStyle:{borderTopWidth:0,height:80},tabBarIcon:({color})=><AntDesign name="piechart" size={30} color={color} />}} component={StatsScreen}></Tab.Screen>
  </Tab.Navigator>
}


export default function App() {


  return (
    <>
    <StatusBar style="light"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen  name='Landing' options={{
            headerShown:false
          }} component={LandingPage} ></Stack.Screen>
          <Stack.Screen name='Home' options={{
            headerShown:false
          }} component={HomePage} ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
       </>
  );
}
