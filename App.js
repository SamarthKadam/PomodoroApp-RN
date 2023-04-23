import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPageScreen';
import Timer from './screens/TimerScreen';
import List from './screens/ListScreen';
import User from './screens/UserScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import StatsScreen from './screens/StatsScreen';

const Stack=createNativeStackNavigator();
const Tab=createBottomTabNavigator();


function HomePage()
{
  return <Tab.Navigator screenOptions={{headerShown:false,tabBarShowLabel:false,tabBarStyle:{height:80},tabBarActiveTintColor:'#6E7DFF'}}>
     <Tab.Screen name='Timer' options={{tabBarIcon:({color})=><MaterialCommunityIcons name="timer" size={30} color={color} />}} component={Timer}></Tab.Screen>
     <Tab.Screen name='List' options={{tabBarIcon:({color})=><FontAwesome name="th-list" size={30} color={color} />}} component={List}></Tab.Screen>
     <Tab.Screen name='Stats'options={{tabBarIcon:({color})=><AntDesign name="piechart" size={30} color={color} />}} component={StatsScreen}></Tab.Screen>
     <Tab.Screen name='User'options={{tabBarIcon:({size,color})=><FontAwesome name="user" size={30} color={color} />}} component={User}></Tab.Screen>
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

