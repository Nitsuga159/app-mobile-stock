import { Text, TextInput, View } from "react-native";
import PreStyles from "../../style/prevalues";
import Button from "../Button";
import colors from "../../style/colors";
import { useState } from "react";

export default function ConfirmationModal({ onConfirm, onCancel, title, text, value }) {
    const [input, setInput] = useState('')
    
    const handleOnConfirm = () => {
        if(input === value) {
            onConfirm()
        }
    }

    return (
        <View style={{
            position: 'absolute', 
            width: '100%', 
            height: '100%',
            backgroundColor: '#12121277',
            zIndex: 99,
            ...PreStyles.flexCenter
        }}>
            <View style={{ width: '85%', backgroundColor: colors.GRAY, padding: 10, borderRadius: 6 }}>
                <Text style={{...PreStyles.defaultFont, fontWeight: 'bold', fontSize: 20}}>{title}</Text>
                <Text style={{...PreStyles.defaultFont, fontSize: 15, marginVertical: 10}}>{text}</Text>
                <TextInput 
                    style={{
                        backgroundColor: colors.LIGHT_GRAY,
                        color: 'white',
                        paddingHorizontal: 6,
                        marginVertical: 10,
                        borderRadius: 5
                    }}
                    value={input}
                    onChangeText={(text) => setInput(text)}
                /> 
                <View style={{...PreStyles.flexVerticalAlign, justifyContent: 'flex-end', gap: 10}}>
                    <Button text='Confirmar' bgcolor={colors.LIGHT_BLUE} onPress={handleOnConfirm} bold/>
                    <Button text='Cancelar' bgcolor={colors.RED} onPress={onCancel} bold/>
                </View>
            </View>
        </View>
    )
}