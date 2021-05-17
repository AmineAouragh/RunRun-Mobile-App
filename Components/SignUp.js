import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native' 
import { SocialIcon } from 'react-native-elements'

export default function SignUp({ navigation }) {

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.main_container}>
          <SocialIcon
            title='Sign up with Google'
            button 
            type='google'
            style={{ width: '80%' }}
          />
          <SocialIcon
            title='Sign up with Facebook'
            button 
            type='facebook'
            style={{ width: '80%' }}
          />
          <SocialIcon
            title='Sign up with Twitter'
            button 
            type='twitter'
            style={{ width: '80%' }}
          />
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