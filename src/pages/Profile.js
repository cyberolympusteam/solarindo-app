import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ListMenu} from '../component';
import Style from '../component/Style';
import {getData, removeData} from '../config/localstorage';
import {useSelector, useDispatch} from 'react-redux';

const Profile = ({navigation}) => {
  const [profile, setProfile] = useState([]);
  const [token, setToken] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    getUserData();
    getToken();
  }, [navigation]);

  // Pengunaan get data user dengan redux tidak jalan saya alternatifkan get data user yg tersimpan pada local storage
  const getDataUser = () => {
    dispatch({
      type: 'GET_DATA',
      token: token,
      userID: profile.id,
    });
  };

  const getUserData = () => {
    getData('userInfo').then(res => {
      let data = res;
      setProfile(data);
    });
  };
  const getToken = () => {
    getData('@token')
      .then(res => {
        setToken(res);
      })
      .catch(err => console.log(err));
  };
  const goToUpdateProfile = () => {
    console.log('goTo Update Profile');
    navigation.navigate('UpdateProfile');
  };

  const handleLogout = () => {
    removeData('userInfo');
    removeData('@token');
    navigation.reset({index: 0, routes: [{name: 'Home'}]});
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Image
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
            style={styles.pictureProfile}
          />
          <Text style={styles.name}>{profile.name}</Text>
          <Text>Role: {profile.account_role}</Text>
          <Text>Phone number: {profile.phone}</Text>
        </View>
        <View style={Style.containerPanel}>
          <ListMenu onPress={goToUpdateProfile}>Update Profile</ListMenu>
          <ListMenu onPress={handleLogout}>Logout</ListMenu>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  pictureProfile: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
  },
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});
