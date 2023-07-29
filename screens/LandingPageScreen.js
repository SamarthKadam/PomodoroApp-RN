import {Image} from 'react-native';
import { Color } from '../constants/Colors';
import React, { useEffect, useState } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from '@react-navigation/native';
import Para from '../components/Para';

//This is LandingPage

export default function LandingPage() {

  const navigation=useNavigation();
 
    return <Onboarding
    onSkip={()=>{navigation.replace('Home')}}
    pages={[
      {
        backgroundColor:Color.primary800,
        image: <Image style={{height:256,width:256,marginTop:10}} source={require('../assets/target.png')} />,
        title: 'Get Focused',
        subtitle:<Para>Achieve unparalleled productivity and flawless outcomes with our laser-focused work approach.</Para>,
      },{
        backgroundColor:Color.primary800,
        image: <Image style={{height:256,width:256,marginTop:10}} source={require('../assets/business.png')} />,
        title: 'Efficiency',
        subtitle: <Para>Unleash the power of efficiency and watch your productivity soar to new heights.</Para>,
  
      },
      {
        backgroundColor:Color.primary800,
        image: <Image style={{height:256,width:256,marginTop:10}} source={require('../assets/start-up.png')} />,
        title: 'Accomplish',
        subtitle: <Para>Embrace challenges, defy limits, and accomplish the extraordinary</Para>,
      }]}
      onDone={()=>{navigation.replace('Home')}}
  />

}
