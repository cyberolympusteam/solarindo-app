import React, {useEffect} from 'react';
import Splashscreen from './Splashscreen.js';

const Main = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  });
  return <Splashscreen />;
};

export default Main;
