import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

export const SplashScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Image
          style={styles.image}
          source={require('../assets/splashScreen.png')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
    // resizeMode: 'contain',
  },
});
