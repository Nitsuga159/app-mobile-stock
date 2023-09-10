import { View } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

export default function Loading() {
    return (
        <Spinner visible animation="fade" textContent="Cargando... " color="white" textStyle={{color: 'white'}} />
    )
}