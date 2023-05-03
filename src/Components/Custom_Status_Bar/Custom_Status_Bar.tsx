import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import Colors from '../../Colors/Colors';

interface CustomStatusBarProps {
    showSpinner?: boolean;
    backgroundColor?: string;
    backgroundDimColor?: string;
}

const CustomStatusBar: FunctionComponent<CustomStatusBarProps> = ({
    showSpinner,
    backgroundColor,
    backgroundDimColor,
}) => {
    return (
        <StatusBar
            barStyle={'light-content'}
            backgroundColor={
                showSpinner || false
                    ? backgroundDimColor
                        ? backgroundDimColor
                        : Colors().BackgroundDim
                    : backgroundColor
                    ? backgroundColor
                    : Colors().Background
            }
        />
    );
};

export default CustomStatusBar;
