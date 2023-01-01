
import * as React from 'react'
import MainContainer from './src/components/MainContainer'
import { NavigationContainer } from '@react-navigation/native'
import { TailwindProvider } from 'tailwindcss-react-native';
import QuestionsProvider from './src/contexts/questions'
import StackNavigator from './src/components/StackNavigator ';
import AppNav from './src/components/AppNav'
import UsersProvider from './src/contexts/users'
import TravelProvider from './src/contexts/travel';

export default function App() {
  return (
    <NavigationContainer>
      <TravelProvider>
      <QuestionsProvider>
        {/* <StackNavigator /> */}
        {/* <MainContainer /> */}
        <UsersProvider><AppNav /></UsersProvider>
      </QuestionsProvider>
      </TravelProvider>
    </NavigationContainer>

  )

}


