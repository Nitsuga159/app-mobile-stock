import { useEffect } from "react";
import { Text, View } from "react-native";
import User from "../../models/User";

export default function Users() {

    return (
        <View>
            {
                User.getUserCollection().map((user) => (
                    <View key={user.getId()}>
                        <Text style={{color: 'white'}}>{user.getUsername()}</Text>
                        <Text style={{color: 'white'}}>{user.getId()}</Text>
                        <Text  style={{color: 'white'}}>{user.getBirthday()}</Text>
                    </View>
                ))
            }
        </View>
    )
}