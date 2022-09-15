import React from 'react';
import { AsyncStorage } from 'react-native';
import Splashscreen from "./Splashscreen.js";
import TabHome from "./TabHome.js";

export default class Main extends React.Component {


    UNSAFE_componentWillMount() {
        this.setState({
            view : <Splashscreen />
        });


        setTimeout(() => {
            //IF FALSE NAVIGATE TO ERROR

                this.setState({
                    view : <TabHome/>
                })
        }, 2000) //TIME OF WAITING


    }

    render() {
        return (
            this.state.view
        )
    }
}