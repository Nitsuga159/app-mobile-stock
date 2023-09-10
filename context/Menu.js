import { Text, View } from "react-native";
import colors from "../style/colors";
import { createContext, useState } from "react";

const initialState = {
    open: false,
    items: [],
    setMenuSettings: () => {}
}

export const MenuContext = createContext(initialState)

export default function MenuProvider({ children }) {
    const [{ open, items }, setMenuConfigs] = useState(initialState)

    const setMenuSettings = (settings) =>
        setMenuConfigs(prev => ({ ...prev, ...settings }))

    return (
        <MenuContext.Provider value={{ open, items, setMenuSettings }}>
            {children}
            {
                open && 
                <View style={{ position: "absolute", width: '100%', height: '100%', zIndex: 98, backgroundColor: '#121212AA' }}>
                    <View style={{ height: '100%', width: '50%',backgroundColor: colors.GRAY, borderTopEndRadius: 7, borderBottomEndRadius: 7 }}>
                    <Text style={{}}>Menu</Text>
                    {
                        items.map(({  }) => (
                            <></>
                            ))
                        }
                    </View>
                </View>
            }
        </MenuContext.Provider>
    )
}