import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Button,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

const Item = ({data}) => {
  return (
    <View style={styles.item}>
      <Text>Capital :{data.capital}</Text>
      <Text>Population: {data.population}</Text>
      <Text>
        lat-lng: {data.latlng[0]} - {data.latlng[1]}
      </Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `${data.flag}`,
        }}
      />
    </View>
  );
};

const CountryDetail = () => {
  const countryDetails = useSelector((state) => state.country);
  const pageLoader = useSelector((state) => state.pageLoader);
  const dispatch = useDispatch();
  const renderItem = ({item}) => <Item data={item} />;
  const _handlePress = () => {
    dispatch({
      type: 'WEATHER_REQUEST',
      payload: {name: countryDetails.data[1].capital},
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={countryDetails.data} renderItem={renderItem} />
      <View>
        <Button title="Capital Weather" onPress={_handlePress} />
      </View>
      {!pageLoader.isVisible &&
        countryDetails &&
        countryDetails.weatherDetail !== '' && (
          <View style={styles.item}>
            <Text>wind_speed :{countryDetails.weatherDetail.wind_speed}</Text>
            <Text>temperature: {countryDetails.weatherDetail.temperature}</Text>
            <Text>precip:{countryDetails.weatherDetail.precip} </Text>
            <Image
              style={styles.tinyLogo}
              source={{
                uri: countryDetails.weatherDetail.weather_icons[0],
              }}
            />
          </View>
        )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 30,
    height: 30,
  },
});

export default CountryDetail;
