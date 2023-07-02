import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Color } from '../constants/Colors';


//This is loadingOverlay component which displays loading spinner

function LoadingOverlay({ message }) {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.message}>{message}</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
    backgroundColor:Color.primary600
  },
  message: {
    fontSize: 16,
    color:'white',
    marginBottom: 12,
  },
});