import { TouchableOpacity, View } from "react-native";
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import S from './style'
import { useContext, useState } from "react";
import Menu from "../../components/Menu";
import { MenuContext } from "../../context/Menu";

export default function Home() {
    const { setMenuSettings } = useContext(MenuContext)
    const [openLeftMenu, setOpenLeftMenu] = useState(false)

    return (
        <View style={{height: '100%', width: '100%', padding: 10}}>
            <TouchableOpacity style={{...S.menuButton, zIndex: 99}} onPress={() => setMenuSettings({ open: true })}>
                    <Feather style={{zIndex: 99}} name="menu" size={24} color="white" />
            </TouchableOpacity> 
        </View>
    )
}