import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native' 
import { SocialIcon, Button } from 'react-native-elements'
import { PasswordInputText } from 'react-native-hide-show-password-input'


const checkEmailRegex = email => {
  let emailRegex = /^\w+\d+@(gmail|yahoo|protonmail)[.]com$/
  return email.match(emailRegex)
}

export default function SignUp({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isValid, setIsValid] = useState(false)

    return (
        <View style={styles.main_container}>
          <View style={{ marginTop: 20, marginBottom: 80 }}>
            <SocialIcon
              title='Sign up with Google'
              button 
              type='google'
              style={styles.social_icons_container}
            />
            <SocialIcon
              title='Sign up with Facebook'
              button 
              type='facebook'
              style={styles.social_icons_container}
            />
            <SocialIcon
              title='Sign up with Twitter'
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
              placeholder='Password(min. 8 characters)' 
              style={styles.inputText}
              value={password}
              onChangeText={input => setPassword(input)}
              
            />
          </View>
          <View>
            <Button 
              title='Sign up with email'
              disabled
              buttonStyle={{ width: 250, borderRadius: 15 }}
              onPress={() => Alert.alert('You should fill your email and password first')}
              accessibilityLabel="Button for signing up with Email"
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#246EE9'
    },
    social_icons_container: {
      paddingRight: 50,
      width: '85%'
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
    }
})

export default checkEmailRegex
