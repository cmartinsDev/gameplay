import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import Home from '../screens/home';
import SignIn from '../screens/signIn';


const { Navigator, Screen } = createStackNavigator()

export function AuthRoutes() {
    return(
        <Navigator headerMode="none" screenOptions={{cardStyle: {
            backgroundColor: 'transparent'
        }}}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
        
    )
}