/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';

import {SplashScreen} from './src/components/SplashScreen';
import {Login} from './src/components/Login';

const App = () => {
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 2000);
  }, [splash]);

  return <SafeAreaView>{splash ? <SplashScreen /> : <Login />}</SafeAreaView>;
};

export default App;
