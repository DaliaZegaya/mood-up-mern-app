import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Travel from '../screens/Travel'

const Stack = createStackNavigator()
const StackNavigator = () => {
    return (
            <Stack.Navigator>
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{ title: "SignIn" }}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{ title: "SignUp" }}
                />
                <Stack.Screen
                    name="Travel"
                    component={Travel}
                    options={{ title: "Travel" }}
                />
            </Stack.Navigator>
    )
}

export default StackNavigator;