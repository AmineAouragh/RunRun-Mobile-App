import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native' 
import { SocialIcon } from 'react-native-elements'
import { PasswordInputText } from 'react-native-hide-show-password-input'

export default function SignUp({ navigation }) {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.main_container}>
          <View>
            <SocialIcon
              title='Sign up with Google'
              button 
              type='google'
              style={{ width: '85%' }}
            />
            <SocialIcon
              title='Sign up with Facebook'
              button 
              type='facebook'
              style={{ width: '85%' }}
            />
            <SocialIcon
              title='Sign up with Twitter'
              button 
              type='twitter'
              style={{ width: '85%' }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TextInput 
              autoComplete='off'
              placeholder='Email           '
              style={{ borderBottomWidth: 1, marginBottom: 20, textAlign: 'left', alignSelf: 'center', fontSize: 25 }}
            />
            <TextInput
              secureTextEntry={true}
              placeholder='Password(min. 8 characters)' 
              style={{ borderBottomWidth: 1, textAlign: 'left', fontSize: 25 }}
            />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})