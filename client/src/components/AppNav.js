import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import MainContainer from "./MainContainer";
import { createStackNavigator } from '@react-navigation/stack'
import { usersContext } from '../contexts/users';
import Auth from '../components/Auth';

const Stack = createStackNavigator()

const AppNav = () => {
    
    const { userToken } = useContext(usersContext)

    return (
        <>
            {userToken !== undefined ? <MainContainer /> : <Auth />}
        </>
    )
}

export default AppNav;