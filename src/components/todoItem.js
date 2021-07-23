import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function TodoItem({item, DeleteHandler, UpdateHandler}) {
  const [text, setText] = useState('');
  const [input, setInput] = useState(false);

  const changeHandler = val => {
    setText(val);
  };

  return (
    <View>
      <Text style={styles.item}>{item.task}</Text>
      <TouchableOpacity
        style={styles.wrap}
        onPress={() => DeleteHandler(item.index)}>
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setInput(true);
        }}>
        <Text style={styles.updateButton}>+</Text>
      </TouchableOpacity>
      {input ? (
        <View>
          <TextInput
            style={styles.input}
            placeholder="new task"
            onChangeText={changeHandler}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setInput(false);
              UpdateHandler({task: text, index: item.index});
            }}>
            <Text>Update</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    marginTop: 15,
    borderColor: '#bbb',
    borderWidth: 2,
    borderRadius: 10,
  },
  wrap: {
    position: 'relative',
  },
  deleteButton: {
    position: 'absolute',
    marginLeft: 310,
    marginTop: -45,
    height: 15,
    width: 15,
    marginBottom: 23,
    paddingLeft: 2,
    paddingBottom: 0,
  },
  updateButton: {
    position: 'absolute',
    marginLeft: 310,
    marginTop: -25,
    height: 15,
    width: 15,
    marginBottom: 23,
    paddingLeft: 2,
    paddingBottom: 5,
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
