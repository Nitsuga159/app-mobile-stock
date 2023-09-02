import { StyleSheet, Text, View } from 'react-native';

export default function Landing() {
    return (
      <>
        <Text style={{...styles.defaultFont, ...styles.title}}>
          ¡Bienvenido a Check Store!
        </Text>
        <Text style={{...styles.defaultFont, ...styles.subtitle}}>
          Tu lugar preferido para registrar los movimientos en tu negocio
        </Text>
      </>
    );
}

const styles = StyleSheet.create({
    defaultFont: {
      width: "100%",
      color: "white",
      textAlign: "center"
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 16,
      opacity: 0.8
    }
});