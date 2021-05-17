import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default function SignIn({ navigation }) {
    return ( 
        <View style={styles.main_container}>
          <SocialIcon
            title='Continue with Google'
            button 
            type='google'
            style={{ width: '80%' }}
          />
          <SocialIcon
            title='Continue with Facebook'
            button 
            type='facebook'
            style={{ width: '80%' }}
          />
          <SocialIcon
            title='Continue with Twitter'
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
        alignItems: 'center',
        justifyContent: 'center'
    }
})