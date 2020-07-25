import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends Component {
    
    static navigationOptions = {
        headerTitle: "Profile",
        headerTintColor: 'white',
        headerTitleStyle: {
                color: 'white',
                fontSize:16
            },
            headerStyle: {
                elevation: 0,
                backgroundColor: '#0B108C',
                height: 50,

        },
    }

  constructor(props) {
    super(props);
    this.state = {
        datalogin: ''
    };
  }

  UNSAFE_componentWillMount() {
      this.ambildata()
  }

  ambildata = async () => {
      
    var dataa = await AsyncStorage.getItem('dataLogin');
    console.log('object', dataa)
    this.setState({datalogin:dataa})

  }


  render() {
    return (
      <View>
        <Text>{this.state.datalogin} </Text>
      </View>
    );
  }
}

export default Profile;
