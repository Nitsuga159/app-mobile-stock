import { StyleSheet } from "react-native";
import colors from "../../style/colors";

export default StyleSheet.create({
    defaultFont: {
      width: "100%",
      color: "white",
      textAlign: "center"
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 16,
      opacity: 0.8,
      marginVertical: 18,
      fontStyle: "italic"
    },
    container: {
      width: '85%',
      justifyContent: 'center',
      alignItems: 'center'
    },
    label: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold'
    },
    input: { 
        backgroundColor: 'transparent', 
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        paddingHorizontal: 4,
        color: 'white',
        marginBottom: 18
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.LIGHT_BLUE,
        textAlign: 'left',
        marginVertical: 8
    },
    date: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'left',
        color: colors.LIGHT_BLUE,
        marginBottom: 15
    }
});