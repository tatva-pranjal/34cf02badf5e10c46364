import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import _ from 'lodash';
import styles from '../../components/Loader/style';

const CountryForm = (props) => {
  const [countryId, setCountry] = useState('');
  const dispatch = useDispatch();

  const onChangeText = (value) => {
    setCountry(value);
  };
  const _handleSubmit = () => {
    dispatch({
      type: 'COUNTRY_REQUEST',
      payload: {countryId: countryId.toLowerCase()},
    });
  };

  return (
    <View style={style.container}>
      <TextInput
        style={style.inputWrapper}
        onChangeText={(text) => onChangeText(text)}
        value={countryId}
        placeholder="Enter country "
      />
      <View style={style.buttonWrapper}>
        <Button onPress={_handleSubmit} title="Submit" />
      </View>
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

export default CountryForm;
