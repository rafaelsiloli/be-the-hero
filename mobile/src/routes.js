import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

const AppStack = createStackNavigator();

export default function Routes(){
    
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="card" screenOptions={{ headerShown: false, gestureEnabled:true, gestureDirection : "horizontal" }}>
                <AppStack.Screen 
                    name="Incidents" 
                    component={Incidents} 
                    options={{ ...TransitionPresets.SlideFromRightIOS }}
                />
                <AppStack.Screen 
                    name="Detail" 
                    component={Detail}
                    options={{
                        /*transitionSpec: {
                          open: TransitionSpecs.TransitionIOSSpec,
                          close: TransitionSpecs.TransitionIOSSpec,
                        },*/
                        /*cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,*/
                        ...TransitionPresets.SlideFromRightIOS
                      }}
                />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}