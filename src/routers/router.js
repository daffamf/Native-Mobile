import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Home } from '../pages'

const Stack = createStackNavigator();
export default function AppNavigator() {
  
        return (
            <Stack.Navigator
                initialRouteName='Login Screen'
                headerMode={'none'}>
                <Stack.Screen
                    name="Login Screen"
                    component={Login}
                    options={{
                        headerStyle: { backgroundColor: 'white' },
                    }}
                />
                <Stack.Screen
                    name="Home Screen"
                    component={Home}
                    options={{
                        headerStyle: { backgroundColor: 'white' },
                    }}
                />
               
            </Stack.Navigator>
        )
    }