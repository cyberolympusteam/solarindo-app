/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Style from '../component/Style';
import axios from 'axios';
import {storeData} from '../config/localstorage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    axios({
      method: 'post',
      headers: {'Content-Type': 'application/json', Authorization: 'None'},
      url: 'http://solarindo.indorobotik.com/api/v1/auth',
      data: {
        email: email,
        password: password,
      },
    })
      .then(res => {
        if (res.data.status === 200) {
          setLoading(false);
          storeData('userInfo', res.data.data);
          storeData('@token', res.data.token);
          navigation.navigate('Profile');
        } else {
          setLoading(false);
          return alert(res.data.message);
        }
      })
      .catch(err => {
        setLoading(false);
        console.log('error: ', err.response);
      });
  };

  return (
    <View style={[Style.container, {padding: 20}]}>
      <TextInput
        style={Style.formInput}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={Style.formInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity style={Style.button} onPress={handleLogin}>
        {loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={Style.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Login;
