/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Hello from './src/Hello';
import HeaderComponent from './src/Header';
import Tasks from './src/Tasks';
import DinamicTasks from './src/DinamicTasks'

const App: () => React$Node = () => {
  return (
    <>
      <HeaderComponent />
      <DinamicTasks/>
      {
        /*
         <Tasks />
          <Hello styleContainer={styles.sectionContainer} styleTitle={styles.sectionTitle} /> 
        **/
      }
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    marginBottom: 40,
    textAlign: 'center'
  },
});

export default App;
