import React, {useEffect, useState} from 'react';

import store from './src/redux/store';
import {Provider} from 'react-redux';

// import {StyleSheet, Text, View, FlatList} from 'react-native';
import {AppNavigator} from './src/navigation/navigation';
import firestore from '@react-native-firebase/firestore';

XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
    GLOBAL.originalXMLHttpRequest :
    GLOBAL.XMLHttpRequest;

export default function App() {
    const getUsers = async () => {
        const usersCollection = await firestore().collection('users').doc(
            'Dp9fcgeZnHIwM2u4gFUc').get();
        console.log("yu", usersCollection);
    };
    useEffect(() => {
getUsers();

    }, []);
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}


