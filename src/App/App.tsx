/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { FunctionComponent, useEffect } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import MainStack from '../Routes/Main_Stack/Main_Stack';
import Colors from '../Colors/Colors';
import CustomStatusBar from '../Components/Custom_Status_Bar/Custom_Status_Bar';

const App: FunctionComponent = () => {
    useEffect(() => {
        if (Platform.OS === 'android') {
            const time_out = setTimeout(() => {
                SplashScreen.hide();
            }, 1000);
            return () => {
                clearTimeout(time_out);
            };
        }
    }, []);

    return (
        <View style={styles.app_main}>
            <NavigationContainer>
                <CustomStatusBar />
                <MainStack />
            </NavigationContainer>
        </View>
    );
};

const styles = StyleSheet.create({
    app_main: {
        flex: 1,
        backgroundColor: Colors().Background,
    },
});

export default App;
