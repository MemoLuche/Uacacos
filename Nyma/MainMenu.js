// MainMenu.js
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MainMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Menú Principal</Text>
        <Text>Bienvenido al menú principal de NYMA.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F8F6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
