import React from 'react';
import { StatusBar , View , Alert , ActivityIndicator, Button, ScrollView } from 'react-native';
import { Header, ListMenu } from '../component';
import style from '../component/Style';
import AsyncStorage from '@react-native-community/async-storage';

export default class TabSettings extends React.Component {

	constructor(props){
        
		super(props)
		this.state={
            isLoading: 'flex',
            dataBooking: [],
            isLogin: false
        }
        
    }
    
    UNSAFE_componentWillMount () {
      this.getDataLogin()
    }

    updateData = data => {
      if (data == '1'){
        this.getDataLogin();
      }
    };
    getDataLogin = async () => {
      var isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      this.setState({isLogin: isLoggedIn == '1' ? true:false})
    }

    login = () => {
        console.log("toLogin");
        this.props.navigation.navigate("Login",  {updateData: this.updateData});
      }
    
      pageAddress = () => {
        console.log("toAddress");
        this.props.navigation.navigate("Address");
      }
    
      pageFaq = () => {
        console.log("toFAQ");
        this.props.navigation.navigate("FAQ");
      }
    
      pageAbout = () => {
        console.log("to About");
        this.props.navigation.navigate("About");
      }
    
      pageContactUs = () => {
        console.log("toContactUs");
        this.props.navigation.navigate("ContactUs");
      }
      
      register = () => {
        console.log("toRegister");
        this.props.navigation.navigate("Register");
      }
      
      profile = () => {
        console.log("toProfile");
        this.props.navigation.navigate("Profile");
      }

      signOut = () => {
        console.log("toLogOut");
        // this.props.navigation.navigate("Register");
        Alert.alert(
          'Logout',
          'Anda yakin ingin Keluar',
          [
              {
                text: 'Tidak',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {
                text: 'Ya, Keluar',
                onPress: async () => this.Keluar()
              },
          ]
      );
      }

    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor="#0B108C" barStyle="light-content"></StatusBar>
                <Header headerName="SETTINGS"></Header>
				<ScrollView>
					<View style={style.containerPanel}>
            {!this.state.isLogin ? 
              null:
              <ListMenu onPress={this.profile}>Profile</ListMenu>
            }
            <ListMenu onPress={this.pageContactUs}>Hubungi Kami</ListMenu>
            <ListMenu onPress={this.pageFaq}>FAQ </ListMenu>
            <ListMenu onPress={this.pageAbout}>Tentang Solarindo</ListMenu>
            {!this.state.isLogin ? 
              <View>
                <ListMenu onPress={this.login}>Login</ListMenu>
                <ListMenu onPress={this.register}>Register</ListMenu>
              </View>
              :
              <ListMenu onPress={this.signOut}>Keluar</ListMenu>
            }
					</View>
				</ScrollView>
            </View>
        )
    }

    Keluar = async () => {
      await AsyncStorage.setItem('isLoggedIn', '0')
      this.setState({isLogin:false})
      setTimeout(() => {
          this.props.navigation.navigate('Home')
      }, 2000);
    }
  
}
