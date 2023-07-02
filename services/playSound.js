import {Audio} from 'expo-av'

export async function playSound()
{
 const { sound } = await Audio.Sound.createAsync( require('../assets/audio/AnalogBeep.mp3'));
 await sound.playAsync();
}
///An service to play sound after every interval