import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { Card } from 'react-native-paper';
import CheckBox from './components/CheckBox';
import React from 'react';
import AssetExample from './components/AssetExample';

export default function App() {
  const [check,setCheck] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
    <CheckBox
    title = 'CheckBox'
    onPress = {()=>{setCheck(!check)}}
    value = {check}
    topBorder= {true}
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
