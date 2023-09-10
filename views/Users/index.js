import { useContext, useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import User from "../../models/User";
import PreStyles from "../../style/prevalues";
import S from './style'
import colors from "../../style/colors";
import { GlobalContext } from '../../context/global'
import { VIEWS } from "../../env";
import Navbar from "../../components/Navbar";
import { Foundation, FontAwesome5 } from '@expo/vector-icons';
import logger from "../../logger";
import ConfirmationModal from "../../components/ConfirmationModal";
import directories from '../../directories.json'
import IO from "../../IO";

export default function Users() {
    const { setGlobalState, globalState } = useContext(GlobalContext);
    const [removeUser, setRemoveUser] = useState({ active: false, user: null });

    const selectUserHandle = (user) => {
        setGlobalState({ view: VIEWS.HOME, user })
    }

    const selectUserToRemoveHandle = (user) => {
        setRemoveUser({ active: true, user })
    }

    return (
        <View style={{...PreStyles.flexUp, ...PreStyles.container}}>
            <View style={{ width: '100%', padding: 15 }}>

            <Text style={{ ...PreStyles.defaultFont, ...S.title }}>Selecciona tu usuario </Text>
            <View style={{ width: '100%', gap: 10 }}>
                {
                    globalState.users.map((user) => (
                        <TouchableOpacity 
                            style={{...S.cardUserContainer, ...PreStyles.flexVerticalAlign}} 
                            key={user.getId()}
                            onPress={removeUser.active ? () => selectUserToRemoveHandle(user) : () => selectUserHandle(user)}
                        >
                            <View>
                                <Text style={PreStyles.defaultFont}>{user.getUsername()}</Text>
                                <Text style={S.birthday}>
                                    {new Date(user.getBirthday()).toLocaleDateString()}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </View>
                </View>
            <Navbar items={[
                {
                    render: <Foundation name="trash" size={24} color={colors[!removeUser.active ? 'RED' : 'LIGHT_BLUE']} />,
                    onPress: () => setRemoveUser(({ active }) => ({ active: !active, user: null})),
                    label: 'Eliminar',
                    color: colors[!removeUser.active ? 'RED' : 'LIGHT_BLUE']
                },
                {
                    render: <FontAwesome5 name="user-plus" size={20} color={colors.YELLOW} />,
                    onPress: () => {
                        setGlobalState({ view: VIEWS.REGISTER })
                    },
                    label: 'Agregar',
                    color: colors.YELLOW
                }
            ]} />
            {
                removeUser.user && 
                <ConfirmationModal 
                    title='Eliminar usuario' 
                    text={`Si está seguro de eliminar el usuario, escriba su nombre '${removeUser.user.getUsername()}' y confirme la eliminación`}
                    value={removeUser.user.getUsername()} 
                    onCancel={() => setRemoveUser({ active: true, user: null })}
                    onConfirm={async () => {
                        const userToRemoveId = removeUser.user.getId()
                        const usersWithoutRemoved = globalState.users.filter(user => user.getId() !== userToRemoveId)

                        try {

                            //Update JSON users without user selected
                            await IO.updateFile({ path: directories.users, content: User.toJsonUsers(usersWithoutRemoved) })

                            //Delete all data from that user
                            await IO.deleteDirectoryRecursive({ directoryName: userToRemoveId })

                        } catch(e) {
                            logger.error(Users, 'Cannot delete user from JSON or its data')
                        }

                
                        setGlobalState({ users: usersWithoutRemoved })
                        setRemoveUser({ active: true, user: null })
                    }}
                />
            }
        </View>
    )
}