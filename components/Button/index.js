import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ 
    text, 
    bgcolor = '#414141', 
    color = 'white', 
    fontSize = 14, 
    padding = 7, 
    onPress, 
    bold=false, 
    style = {}
}) {
    const addBold = bold ? { fontWeight: 'bold', fontFamily: 'Roboto' } : {}

    return (
        <TouchableOpacity style={{ ...S.button, backgroundColor: bgcolor, padding, ...style }} onPress={onPress}>
                <Text style={{ ...S.text, color, fontSize, ...addBold }}>{text}</Text>
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