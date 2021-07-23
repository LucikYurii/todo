import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';
import React from 'react';

export const Loader = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
