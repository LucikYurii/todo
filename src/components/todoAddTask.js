import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';

export default function AddToDo({AddHandler, listLength}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new task"
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => AddHandler({task: text, index: listLength + 1})}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginTop: 30,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
});
