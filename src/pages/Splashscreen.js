import React from 'react';
import { StatusBar , View , Text , ActivityIndicator,ImageBackground } from 'react-native';

import { StackActions, NavigationActions } from '@react-navigation/native';

export default class Splashscreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1 , justifyContent: "center" , alignItems: "center" , backgroundColor : "#FFFFFF"}}>
                <ImageBackground source={require('../../src/asset/images/splashscreen.png')} style={{width: '100%', height: '100%'}}>
                    <StatusBar backgroundColor="#FFFFFF" barStyle="light-content"/>
                    <Text style={{ color : 'white',fontSize : 18, marginBottom: 30 }}>CROG HOTEL</Text>
                    <ActivityIndicator color={'white'}/>
                </ImageBackground>
            </View>
        )
    }
}