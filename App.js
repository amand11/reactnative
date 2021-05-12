import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Square background_color="pink"/>
      <Square background_color="blue"/>
      <Square/>
      <StatusBar style="auto" />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  box: {
    width: 75,
    height: 75,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Square = ({ background_color = "red" }) => (
  <View style={[styles.box, { backgroundColor: background_color }]}>
  </View>
);


