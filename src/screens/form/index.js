import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {navigateTo} from '../../services/navigationService';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

const FormDemo = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPsssword] = useState('');
  const dispatch = useDispatch();

  const onChangeText = (fieldName, value) => {
    if (fieldName === 'email') {
      setEmail(value);
    } else if (fieldName === 'password') {
      setPsssword(value);
    }
  };
  const _handleSubmit = () => {
    dispatch({type: 'SIGN_IN_REQUEST', payload: {email, password}});
  };
  const select = useSelector((state) => state.demo);
  console.log('select', select);
  return (
    <View style={style.container}>
      <TextInput
        style={style.inputWrapper}
        onChangeText={(text) => onChangeText('email', text)}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={style.passwordWrapper}
        onChangeText={(text) => onChangeText('password', text)}
        value={password}
        placeholder="Password"
      />
      <Button
        style={style.buttonWrapper}
        onPress={() => _handleSubmit()}
        title="submit"
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
  },
  passwordWrapper: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginTop: 20,
  },
  buttonWrapper: {
    width: '80%',
    marginTop: 40,
  },
});

export default FormDemo;
