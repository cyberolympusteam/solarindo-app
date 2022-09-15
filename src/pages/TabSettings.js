import React from 'react';
import { StatusBar , View , Text , ActivityIndicator, Button, ScrollView } from 'react-native';
import { Header, ListMenu } from '../component';
import style from '../component/Style';

export default class TabSettings extends React.Component {

	constructor(props){
        
		super(props)
		this.state={
            isLoading: 'flex',
            dataBooking: []
        }
        
    }
    
    login = () => {
        console.log("toLogin");
        this.props.navigation.navigate("Login");
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

    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor="#0B108C" barStyle="light-content"></StatusBar>
                <Header headerName="SETTINGS"></Header>
				<ScrollView>
					<View style={style.containerPanel}>
					<ListMenu onPress={this.pageContactUs}>Hubungi Kami</ListMenu>
                    <ListMenu onPress={this.pageFaq}>FAQ </ListMenu>
                    <ListMenu onPress={this.pageAbout}>Tentang Solarindo</ListMenu>
                    <ListMenu onPress={this.login}>Login</ListMenu>
                    <ListMenu onPress={this.register}>Register</ListMenu>
					</View>
				</ScrollView>
            </View>
        )
    }
}
