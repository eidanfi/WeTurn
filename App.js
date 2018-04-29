import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentsNavigator, { } from './src/components/ComponentsNavigator';

export default class App extends React.Component {
  render() {
    return (
      <ComponentsNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
