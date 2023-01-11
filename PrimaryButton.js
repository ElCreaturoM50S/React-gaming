import {View, Text, Pressable} from 'react-native';

function PrimaryButton(props){
    return (
        <Pressable onPress={pressHandle}
        <Pressable
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#ffggff',
        borderRadius: 28
    },
    btnText: {
        color: 'white',
        textAlign: 'center'
    }

})