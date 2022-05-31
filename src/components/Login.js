import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signin = async () => {
    if (email != '' && password != '') {
      await fetch(
        ' https://tidy4medevelop-env.eba-izti9tws.us-west-1.elasticbeanstalk.com/users/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      );
    } else {
      alert('Enter Info');
    }
  };

  return (
    <KeyboardAvoidingView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.container}>
              <ImageBackground
                style={styles.backgroundImage}
                source={require('../assets/TopOverLayOut.png')}>
                <Image
                  style={styles.image}
                  source={require('../assets/logo.png')}
                />
              </ImageBackground>
            </View>
            <View style={styles.login}>
              <Text style={styles.loginText}>Log in with:</Text>
            </View>
            <View
              style={{
                overflow: 'hidden',
                paddingBottom: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginTop: 15,
              }}>
              <View style={styles.btnsView}>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="facebook" size={30} color="blue" />
                  <Text
                    style={{
                      color: 'black',
                      marginLeft: 6,
                      letterSpacing: 0.25,
                    }}>
                    Facebook
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.btnsView}>
                <TouchableOpacity
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image source={require('../assets/Google.png')} />
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: '400',
                      marginLeft: 6,
                      letterSpacing: 0.25,
                    }}>
                    Google
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* or */}

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 20,
              }}>
              <View
                style={{flex: 0.4, height: 1, backgroundColor: 'lightgray'}}
              />
              <View>
                <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
              </View>
              <View
                style={{flex: 0.4, height: 1, backgroundColor: 'lightgray'}}
              />
            </View>

            {/* Input Fields */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 30,
              }}>
              <View style={{width: '80%'}}>
                <Text style={{marginBottom: 9}}>Email or phone</Text>
                <TextInput
                  style={styles.input}
                  onChangeText={text => {
                    setEmail(text);
                  }}
                  value={email}
                  placeholder="Enter your email or phone number"
                />
              </View>
              <View style={{width: '80%', marginTop: 30}}>
                <Text style={{marginBottom: 9}}>Password</Text>

                <TextInput
                  style={styles.input}
                  onChangeText={text => {
                    setPassword(text);
                  }}
                  value={password}
                  placeholder="Enter your password"
                  secureTextEntry={true}
                />
              </View>
              <View style={{width: '80%', marginTop: 10}}>
                <Text style={{textAlign: 'right'}}>Forget password</Text>
              </View>
            </View>
            {/* Button */}
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{width: '80%', marginVertical: 20}}>
                <View style={styles.btnsView1}>
                  <TouchableOpacity
                    onPress={() => signin()}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text style={styles.text1}>Log in</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.btnsView}>
                  <TouchableOpacity
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'black',
                        marginLeft: 6,
                        letterSpacing: 0.25,
                      }}>
                      Sign up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
  },
  backgroundImage: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  login: {
    alignItems: 'center',
    padding: 10,
    color: 'black',
  },
  loginText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  btnsView1: {
    backgroundColor: '#91D2BB',
    height: 40,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  btnsView: {
    backgroundColor: '#fff',
    height: 40,
    minWidth: 150,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderRadius: 6,
    marginTop: 20,
  },

  btnCHildViews: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    shadowOpacity: 0.3,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainOr: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  mainOrLine: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    flex: 0.4,
  },
  or: {
    flex: 0.1,
    alignItems: 'center',
  },
});
