import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>To do</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    paddingTop: 38,
    backgroundColor: '#C70039',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
