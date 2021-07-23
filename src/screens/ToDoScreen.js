import React, {useState, useRef, useCallback, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getUsers} from '../redux/actions/users';
import {UserItem} from '../components/userItem';
import {debounce} from 'lodash';
import {Loader} from '../components/Loader';

export default function ToDoScreen({t}) {
  const dispatch = useDispatch();

  const {loading, message} = useSelector(state => state.userReducer);

  const [params, setParams] = useState('');

  const changeHandler = val => {
    setParams(val);
  };

  const getUsersFetch = () => {
    console.log('bounce');
    dispatch(getUsers(params));
  };
  const delayHandler = useCallback(debounce(getUsersFetch, 500), [params]);

  useEffect(() => {
    if (params.length !== 0) {
      delayHandler();
    } else {
      console.warn('Type params');
    }
    // Cancel the debounce on useEffect cleanup.
    return delayHandler.cancel;
  }, [params, delayHandler]);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new task"
        onChangeText={changeHandler}
        value={params}
      />
      {loading ? <Loader /> : <UserItem />}
      {message ? <Text style={styles.error}>{message}</Text> : null}
    </View>
  );
}
/*{params !==0 ? (usersList.items.map(item => <Text>Login: {JSON.stringify((item.login))}</Text>)) : <Text>Nothing</Text>}*/
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
  error: {
    color: 'red'
  }
});
