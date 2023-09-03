import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ text, bgcolor = '#414141', color = 'white', fontSize = 14, padding = 7, onPress, bold=false }) {
    return (
        
        <TouchableOpacity style={{ ...S.button, backgroundColor: bgcolor, padding }} onPress={onPress}>
                <Text style={{ ...S.text, color, fontSize, fontWeight: bold ? 'bold' : 'normal' }}>{text}</Text>
        </TouchableOpacity>
    )
}

const S = StyleSheet.create({
    button: {
        alignSelf: 'flex-start', 
        flexDirection: 'row',
        borderRadius: 6
    },
    text: {
        textAlign: 'center'
    }
})