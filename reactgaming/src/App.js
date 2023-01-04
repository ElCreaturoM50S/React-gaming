import {StyleSheet, Text, View} from 'react-native';

import StartGameScreen from './GUI/StartGameScreen';

export default function App() {
  return (
    <StartGameScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})