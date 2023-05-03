import React, { FunctionComponent } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../../Screens/Home_Page/Home_Page';

type MainStackParamList = {
    HomePage: {};
};

const Main_Stack = createNativeStackNavigator<MainStackParamList>();

const MainStack: FunctionComponent = () => {
    return (
        <Main_Stack.Navigator>
            <Main_Stack.Screen
                name="HomePage"
                component={HomePage}
                options={{
                    headerShown: false,
                }}
            />
        </Main_Stack.Navigator>
    );
};

export default MainStack;
