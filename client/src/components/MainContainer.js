import * as React from 'react'
import { View, Text } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from '../screens/Home'
import ProfileScreen from '../screens/Profile'
import SettingsScreen from '../screens/Settings'
import WelcomeScreen from '../screens/Wellcome'
import GetStarted from '../screens/GetStarted'
import SingIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import QuestionsScreen from '../screens/Questions'
import MyBarChart from '../screens/MyBarChart'
import Travel from '../screens/Travel'
import StackNavigator from './StackNavigator '
import { createStackNavigator } from '@react-navigation/stack'
import Music from '../screens/Music'

const Stack = createStackNavigator()



const homeName = 'Home'
const profileName = 'Profile'
const signInName = 'SignIn'
const signUpName = 'SingUp'
const questionsName = 'Questions'
const wellcomeName = 'Wellcome'
const barChartName = 'MyBarChart'
const travelName = 'Travel'
const musicName = 'Music'


const Tab = createBottomTabNavigator()
export default function MainContainer() {
    return (
        <>
            <Tab.Navigator
                initialRouteName={questionsName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline'
                        }
                        else if (rn === profileName) {
                            iconName = focused ? 'person' : 'person-outline'
                        }
                        else if (rn === signInName) {
                            iconName = focused ? 'notifications' : 'notifications-outline'
                        }
                        else if (rn === questionsName) {
                            iconName = focused ? 'help' : 'help-outline'
                        }
                        else if (rn === signUpName) {
                            iconName = focused ? 'settings' : 'settings-outline'
                        }
                        else if (rn === travelName) {
                            iconName = focused ? 'navigate' : 'navigate-outline'
                        }
                        else if (rn === musicName) {
                            iconName = focused ? 'musical-notes' : 'musical-notes-outline'
                        }

                        return <Ionicons name={iconName} size={size} color={color} />
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'rgb(176, 126, 222)',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70 }
                }}>
                <Tab.Screen name={homeName} component={HomeScreen} />
                {/* <Tab.Screen name={profileName} component={ProfileScreen} /> */}
                <Tab.Screen name={profileName} component={GetStarted} />
                <Tab.Screen name={questionsName} component={QuestionsScreen} />
                {/* <Tab.Screen name={wellcomeName} component={WelcomeScreen} /> */}
                {/* <Tab.Screen name={barChartName} component={MyBarChart} /> */}
                {/* <Tab.Screen name={travelName} component={Travel} /> */}
                {/* <Tab.Screen name={signInName} component={SingIn} />
              <Tab.Screen name={signUpName} component={SignUp} /> */}


                <Stack.Screen
                    name="Travel"
                    component={Travel}
                    options={{ title: "Travel" }}
                />
                <Stack.Screen
                    name="Music"
                    component={Music}
                    options={{ title: "Music" }}
                />
            </Tab.Navigator>

        </>

    )
}