import React, { useState } from 'react'
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import { SocialIcon, Button } from 'react-native-elements'
import { PasswordInputText } from 'react-native-hide-show-password-input'
import auth from 'react-native-firebase/auth'
import { GoogleSignin, GoogleSigninButton, statusCodes } from 'react-native-google-signin'

export default function SignIn({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [loggedIn, setloggedIn] = useState(false)

    _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const {accessToken, idToken} = await GoogleSignin.signIn();
        setloggedIn(true);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          // some other error happened
        }
      }
    };

    return ( 
        <View style={styles.main_container}>
          <View style={{ marginTop: 20, marginBottom: 80 }}>
            <SocialIcon
              title='Continue with Google'
              button 
              type='google'
              style={styles.social_icons_container}
            />
            <SocialIcon
              title='Continue with Facebook'
              button 
              type='facebook'
              style={styles.social_icons_container}
            />
            <SocialIcon
              title='Continue with Twitter'
              button 
              type='twitter'
              style={styles.social_icons_container}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput 
              autoComplete='off'
              placeholder='Email'
              style={styles.inputText}
              value={email}
              onChangeText={input => setEmail(input)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry={true}
              placeholder='Password' 
              style={styles.inputText}
              value={password}
              onChangeText={input => setPassword(input)}
            />
          </View>
          <View>
            <Button 
              title='Continue'
              disabled
              buttonStyle={{ width: 250, borderRadius: 15, marginBottom: 20 }}
              onPress={() => Alert.alert('You should fill your email and password first')}
              accessibilityLabel="Button for signing up with Email"
            />
          </View>
          <TouchableOpacity>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#246EE9'
    },
    social_icons_container: {
      width: '85%',
      paddingRight: 50
    },
    inputView: {
      width: '80%',
      backgroundColor: '#6B94F3',
      borderRadius: 25,
      height: 50,
      marginBottom: 40,
      justifyContent: 'center',
      padding: 20
    },
    inputText: {
      height: 50,
      color: "white"
    },
    forgot:{
      color: "white",
      fontSize: 15
    }
})