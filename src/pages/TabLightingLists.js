/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  ActivityIndicator,
  Button,
  ScrollView,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {Header} from '../component';
import style from '../component/Style';
import axios from 'axios';

export default class TabLightingLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: 'flex',
      dataLighting: [],
    };

    this.getLighting();
  }

  renderLighting = rowData => {
    return rowData.map(item => {
      if (item.category !== null) {
        let cat = 'Belum diset';
        cat = item.category.name;
      }

      return (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            this.props.navigation.navigate('Details', {id: item.id});
          }}>
          <View style={[style.boxBorder, {marginBottom: 10}]}>
            <Text style={[style.h2, {marginBottom: 5, color: '#0B108C'}]}>
              {item.name}
            </Text>
            <Text
              style={[
                style.h3,
                {
                  marginBottom: 5,
                  position: 'absolute',
                  right: 0,
                  marginTop: 37,
                  marginRight: 12,
                },
              ]}>
              {item.category}
            </Text>
            <Text style={[style.h3, {marginBottom: 5}]}>
              Alamat : {item.address}
            </Text>
          </View>
        </TouchableOpacity>
      );
    });
  };

  getLighting = () => {
    console.log('get data');

    axios({
      method: 'get',
      url: 'https://solarindo.indorobotik.com/api/v1/media/',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
      .then(response => {
        if (response.data.status === 1) {
          this.setState({
            isLoading: 'none',
            dataLighting: response.data.data.data,
          });
        } else {
          this.setState({isLoading: 'none'});
          this.props.navigation.goBack();
          ToastAndroid.show('Lighting not found!', ToastAndroid.SHORT);
        }
      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Oppsss, network error', ToastAndroid.SHORT);
        this.setState({isLoading: 'none'});
      });
  };

  render() {
    return (
      <View style={style.container}>
        <StatusBar backgroundColor="#0B108C" barStyle="light-content" />
        <Header headerName="LIGHTING LISTS" />
        <ScrollView>
          <ActivityIndicator
            style={{marginBottom: 15, display: this.state.isLoading}}
            color={'#0B108C'}
            animating={true}
          />
          <View style={style.containerPanel}>
            {this.renderLighting(this.state.dataLighting)}
          </View>
        </ScrollView>
      </View>
    );
  }
}
