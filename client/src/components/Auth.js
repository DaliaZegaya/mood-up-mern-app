import React from "react";
import { Provider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Wellcome from '../screens/Wellcome'
import MainContainer from "../components/MainContainer";

const Stack = createStackNavigator();

export default function Auth() {
  return (
        <Provider>
                <Stack.Navigator
                    initialRouteName="Wellcome"
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Wellcome" component={Wellcome} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="HomePage" component={MainContainer} />
                </Stack.Navigator>
        </Provider>
  );
}