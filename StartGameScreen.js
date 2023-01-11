import {View, TextInput, StyleSheet} from 'react-native';
import PrimaryButton from './components/PrimaryButton.js';

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

const StyleSheet.create({
    inputContainer:{
        marginTop: 100,
        padding: 10,
        marginHorizontal: 24,
        backgroundColor: '#55mm55'
    },
    numberInput:{
        height: 50,
        width: 50,
        fontSize: 5,
        borderBottomColor: "#ddbbdd",
        borderBottomWidth: 2,
        color: "#ddb52f",
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})