import React from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'
import { SocialIcon } from 'react-native-elements'

export default function SignIn({ navigation }) {
    return ( 
        <View style={styles.main_container}>
          <View style={{ marginTop: 20 }}>
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
          <View style={[styles.main_container, { backgroundColor: 'white' }]}>
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    social_icons_container: {
      width: '85%',
      paddingRight: 50
    }
})