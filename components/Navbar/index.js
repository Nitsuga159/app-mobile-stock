import { TouchableOpacity, View, Text } from "react-native";
import PreStyles from "../../style/prevalues";
import colors from "../../style/colors";

export default function Navbar({ items }) {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: 10,
            paddingVertical: 8,
            backgroundColor: colors.GRAY, ...PreStyles.flexVerticalAlign, justifyContent: 'space-evenly'
        }}>
            {
                items.map(({ render, label, onPress, color }, index) => (
                    <TouchableOpacity key={index} style={PreStyles.flexCenter} onPress={onPress} >
                        {render}
                        {label && <Text style={{color}}>{label}</Text>}
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}