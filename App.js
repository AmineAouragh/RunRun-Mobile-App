import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from './Components/SplashScreen'
import FirstScreen from './Components/FirstScreen'
import SignUp from './Components/SignUp'


const Stack = createStackNavigator()

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  performTimeConsumingTask = async() => {
    return new Promise((resolve) => 
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask()

    if (data !== null) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />
    }
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen-1"
          screenOptions={{
              headerTitleStyle: {
                textAlign: 'center'
              }
          }}>
          <Stack.Screen 
             name="Screen-1" 
             component={FirstScreen} 
          />
          <Stack.Screen 
             name="Create Account" 
             component={SignUp} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

