import React, { useState, useEffect, FunctionComponent } from 'react';
import { Platform, View } from 'react-native';
import Video from 'react-native-video';
import Tts from 'react-native-tts';
import BasicTextEntry from '../../Components/Basic_Text_Entry/Basic_Text_Entry';
import CustomStatusBar from '../../Components/Custom_Status_Bar/Custom_Status_Bar';
import Colors from '../../Colors/Colors';
import BasicButton from '../../Components/Basic_Button/Basic_Button';
import { no_double_clicks } from '../../Utils/No_Double_Clicks/No_Double_Clicks';

const HomePage: FunctionComponent = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
    const [responseText, setResponseText] = useState<string>('');
    const [responseTextBTE, setResponseTextBTE] = useState<string>('');

    const make_request = no_double_clicks({
        execFunc: () => {
            if (responseTextBTE) {
                setResponseTextBTE('');
                Tts.speak(responseText);
            }
        },
    });

    useEffect(() => {
        setResponseText(responseTextBTE);
    }, [responseTextBTE]);

    useEffect(() => {
        Tts.addEventListener('tts-start', () => {
            setIsAudioPlaying(true);
        });
        Tts.addEventListener('tts-finish', () => {
            setIsAudioPlaying(false);
            setResponseText('');
        });
        return () => {
            Tts.removeEventListener('tts-start', () => {
                setIsAudioPlaying(true);
            });
            Tts.removeEventListener('tts-finish', () => {
                setIsAudioPlaying(false);
                setResponseText('');
            });
        };
    }, []);

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: Colors().Background,
            }}>
            <CustomStatusBar backgroundColor={Colors().Background} />
            <View
                style={{
                    alignItems: 'center',
                    marginTop: 50,
                    marginHorizontal: 0,
                }}>
                {isAudioPlaying ? (
                    <Video
                        source={require('../../Videos/Talking_Looping_480.mp4')}
                        resizeMode="contain"
                        repeat
                        style={{ width: '100%', height: 300 }}
                    />
                ) : (
                    <Video
                        source={require('../../Videos/Idle_Looping_480.mp4')}
                        resizeMode="contain"
                        repeat
                        style={{ width: '100%', height: 300 }}
                    />
                )}
            </View>
            <View
                style={{
                    marginTop: 'auto',
                    marginBottom: Platform?.OS === 'ios' ? 60 : 40,
                }}>
                <BasicTextEntry
                    inputMode="text"
                    inputValue={responseTextBTE}
                    setInputValue={setResponseTextBTE}
                    placeHolderText="Enter a Request..."
                />
                <BasicButton
                    buttonText="Send Request"
                    execFunc={make_request}
                    marginHorizontal={22}
                    marginTop={15}
                />
            </View>
        </View>
    );
};

export default HomePage;
