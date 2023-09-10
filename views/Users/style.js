import { StyleSheet } from "react-native"
import colors from "../../style/colors"

const S = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        width: '100%',
        marginBottom: 20
    },
    cardUserContainer: {
        width: '100%',
        backgroundColor: colors.GRAY,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 8
    },
    birthday: {
        color: "#787878",
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        fontSize: 14
    }
})


export default S