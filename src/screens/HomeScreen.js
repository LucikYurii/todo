import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../components/header';
import TodoItem from '../components/todoItem';
import AddToDo from '../components/todoAddTask';
import {
  addTaskToList,
  deleteTaskFromList,
  updateTaskToList,
} from '../redux/actions/todos';

import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const todoList = useSelector(state => state.todoReducer.todoList);

  const AddHandler = taskObj => {
    if (taskObj.task.length > 0) {
      dispatch(addTaskToList(taskObj));
      return;
    }
    console.warn('Input text');
  };

  const DeleteHandler = taskIndex => {
    dispatch(deleteTaskFromList(taskIndex));
  };

  const UpdateHandler = task => {
    dispatch(updateTaskToList(task));
  };

  const onPressHandler = () => {
    navigation.navigate('ToDo');
  };
  console.log();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddToDo AddHandler={AddHandler} listLength={todoList.length} />
        {/*list*/}
        <View style={styles.list}>
          <FlatList
            data={todoList}
            renderItem={({item}) => (
              <TodoItem
                item={item}
                DeleteHandler={DeleteHandler}
                UpdateHandler={UpdateHandler}
              />
            )}
            keyExtractor={item => `${item.task}+${Math.random()}`}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#33FFF1',
  },
  content: {
    padding: 40,
  },
  list: {
    //marginTop: 40,
  },
});

export default HomeScreen;
