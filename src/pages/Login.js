import React, { Component } from 'react';
import { StatusBar , View , Text , 
    ActivityIndicator, Button, ScrollView, ToastAndroid , 
    TouchableOpacity, Image, StyleSheet,
    TextInput,
} from 'react-native';
import { Header } from '../component';
import style from '../component/Style';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loader from "react-native-modal-loader";
import {login} from '../Helper/Api'
import AsyncStorage from '@react-native-community/async-storage';

class Login extends Component {

    
    static navigationOptions = {
        headerTitle: "Login",
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
            loading: false,
            email: '',
            password: '',
            disableLogin: true,
            dataLogin: ''
        };
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
                <Loader loading={this.state.loading} color="#b82020" />
                <View style={{padding: 3, borderColor: 'black', borderWidth: .3, marginTop: 12, marginHorizontal: 12, borderRadius: 6}}>
                    <TextInput style={{padding: 5, flexGrow: 1}}
                        value={this.state.email}
                        onChangeText={(email) => this.setState({email, disableLogin: email != '' && this.state.password != '' ? false : true})}
                        placeholder="Email"
                        autoCapitalize="none"
                        secureTextEntry={this.state.securePass}>
                    </TextInput>
                </View>
                
                <View style={{padding: 3, borderColor: 'black', borderWidth: .3, marginTop: 12, marginHorizontal: 12, borderRadius: 6}}>
                    <TextInput style={{padding: 5, flexGrow: 1}}
                        placeholder={'Password'}
                        onChangeText={(pass) => this.setState({password: pass, disableLogin: pass != '' && this.state.email != '' ? false : true})}
                        placeholderTextColor= "#7d7d7d"
                        secureTextEntry={true}>
                    </TextInput>
                </View>

                <TouchableOpacity 
                    onPress={async () => this.loginStep()}
                    disabled={this.state.disableLogin}
                    style={{backgroundColor: this.state.disableLogin ? 'grey':'#1016BB', padding: 12,  borderWidth: .3, marginTop: 12, marginHorizontal: 12, borderRadius: 6, alignItems: 'center'}}>
                    <Text style={{color: 'white'}}>LOGIN</Text>
                </TouchableOpacity>

                {/* {this.state.dataLogin != '' ? 
                   
                    : null
                }
                 */}
                 <Text>{JSON.stringify(this.state.dataLogin)}</Text>
            </SafeAreaView>
        );
    }
    
    //admin@solarindo.com

    loginStep = async () => {
        this.setState({loading: true})
        login(this.state.email, this.state.password)
        .then(responseJson => {
            console.log('DataLogin', responseJson)
            if (responseJson == 3 || responseJson == 2){
                ToastAndroid.show('Error', ToastAndroid.SHORT);
            } 
            else if (responseJson.status == 200) {
                this.setState({ 
                    loading: false,
                    dataLogin: responseJson.data
                });
                console.log('responsss', responseJson.data.id)
                
                AsyncStorage.setItem('isLoggedIn', '1');
                AsyncStorage.setItem('dataLogin', JSON.stringify(responseJson.data));
                // this.props.navigation.goBack()
                // this.props.navigation.state.params.updateData('1');
                this.props.navigation.goBack();

            } else {    
                this.setState({ loading: false });
                    // this.props.navigation.goBack()
                    ToastAndroid.show('Gagal terhubung!', ToastAndroid.SHORT);
            }
        })
    }
}

export default Login;
