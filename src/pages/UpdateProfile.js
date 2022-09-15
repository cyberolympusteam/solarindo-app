import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Style from '../component/Style';
import {getData, storeData} from '../config/localstorage';
// import axios from 'axios';

const UpdateProfile = ({navigation}) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUserData();
    getToken();
  }, [navigation]);

  const getUserData = () => {
    getData('userInfo')
      .then(res => {
        let data = res;
        setUserInfo(data);
      })
      .catch(err => console.log(err));
  };

  const changeText = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const getToken = () => {
    getData('@token')
      .then(res => {
        setToken(res);
      })
      .catch(err => console.log(err));
  };

  const updateProfile = () => {
    setLoading(true);
    const axios = require('axios');
    const qs = require('qs');
    let data = qs.stringify({
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
    });
    let config = {
      method: 'post',
      url: `http://solarindo.indorobotik.com/api/v1/user/update/${userInfo.id}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(res => {
        setLoading(false);
        storeData('userInfo', res.data.data);
        navigation.navigate('Home');
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <View style={Style.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={Style.formInput}
          placeholder="username"
          value={userInfo.name}
          onChangeText={text => changeText('name', text)}
        />
        <TextInput
          style={Style.formInput}
          placeholder="email"
          value={userInfo.email}
          onChangeText={text => changeText('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={Style.formInput}
          placeholder="phone number"
          value={userInfo.phone}
          onChangeText={text => changeText('phone', text)}
          keyboardType="number-pad"
        />
        <TouchableOpacity style={Style.button} onPress={updateProfile}>
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={Style.buttonText}>Save Profile</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
});
