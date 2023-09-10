import { Text, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import colors from "../../style/colors";


export default function LineError({ text, fontSize }) {
    return (
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 8 }}>
            <MaterialIcons name="error" size={fontSize * 1.5} color={colors.RED} />
            <Text style={{color: colors.RED, fontSize}}>{text}</Text>
        </View>
    )
}