import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

export const UserItem = () => {
  const usersList = useSelector(state => state.userReducer.userList);
  const error = useSelector(state => state.userReducer.message);
  const [info, setInfo] = useState(false);

  return (
    <View>
      <FlatList
        data={usersList?.items}
        renderItem={({item, index}) => (
          <View>
            <Text>Login: {JSON.stringify(item.login)}</Text>
          </View>
        )}
        keyExtractor={item => `${item.login}+${Math.random()}`}
      />
    </View>
  );
};

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
  updateButton: {
    position: 'absolute',
    marginLeft: 310,
    marginTop: -20,
    height: 15,
    width: 15,
    marginBottom: 23,
    paddingLeft: 2,
    paddingBottom: 5,
  },
});
