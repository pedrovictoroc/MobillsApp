import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import Main from './Components/Main/Main'
import NewOperation from './Components/NewOperation/NewOperation'

const AppStack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false   
                }}
            >
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="SignUp" component={SignUp}/>
                <AppStack.Screen name="Main" component={Main}/>
                <AppStack.Screen name="NewOperation" component={NewOperation}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
}