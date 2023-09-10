import * as FileSystem from 'expo-file-system'
import directories from '../directories.json'
import User from '../models/User';
import UserError from '../errors/UserError'
import 'react-native-get-random-values'
import { v4 } from 'uuid';
import createDirectory from './createDirectory';

export default async function({ username, birthday }) {
    const usersPath = FileSystem.documentDirectory + directories.users

    const { exists } = await FileSystem.getInfoAsync(usersPath)

    if(!exists) {
        throw new UserError("Json for users doesn't exists")
    }

    const users = JSON.parse(await FileSystem.readAsStringAsync(usersPath))

    users.forEach((user) => {
        if(username === user.username) {
            throw new UserError(`User with username '${username}' already exists`)
        }
    });

    const id = v4()

    const user = new User({ username, birthday, id })

    users.push({ username, birthday, id })

    try {
        await FileSystem.writeAsStringAsync(usersPath, JSON.stringify(users))
    } catch(e) {
        throw new UserError(`Cannot read users.json file`, e)
    }

    await Promise.all([
        createDirectory({ directoryName: `mobile_store/${user.getId()}/${'sales'}` }),
        createDirectory({ directoryName: `mobile_store/${user.getId()}/${'products'}` })
    ])

    return user
}