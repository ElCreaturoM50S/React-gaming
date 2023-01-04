import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from './components/PrimaryButton';

function StartGameScreen(){
    return (
        <View>
            <TextInput></TextInput>
            <PrimaryButton> Die lit </PrimaryButton>
            <PrimaryButton> Confirm </PrimaryButton>
        </View>
    )
}

export default StartGameScreen