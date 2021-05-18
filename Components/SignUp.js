import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native' 
import { SocialIcon } from 'react-native-elements'
import { PasswordInputText } from 'react-native-hide-show-password-input'

export default function SignUp({ navigation }) {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={[styles.main_container, { marginTop: 20 }]}>
          <View>
            <SocialIcon
              title='Sign up with Google'
              button 
              type='google'
              style={{ width: '85%',paddingRight: 50 }}
            />
            <SocialIcon
              title='Sign up with Facebook'
              button 
              type='facebook'
              style={{ width: '85%', paddingRight: 50 }}
            />
            <SocialIcon
              title='Sign up with Twitter'
              button 
              type='twitter'
              style={{ width: '85%', paddingRight: 50 }}
            />
          </View>
          <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'white', width: '100%' }}>
            <TextInput 
              autoComplete='off'
              placeholder='Email                                      '
              style={[ styles.textInput_container, { marginBottom: 60, alignSelf: 'center' }]}
            />
            <TextInput
              secureTextEntry={true}
              placeholder='Password(min. 8 characters)         ' 
              style={[ styles.textInput_container, { paddingLeft: 10 } ]}
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
    },
    textInput_container: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      textAlign: 'left',
      fontSize: 20
    }
})