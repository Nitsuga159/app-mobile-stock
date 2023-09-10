import * as FileSystem from 'expo-file-system'
import { USERS_PATH } from '../env'
import UserError from '../errors/UserError'

export const getUsers = async () => {
    return JSON.parse(await FileSystem.readAsStringAsync(USERS_PATH))
}

export const removeUser = async ({ userId }) => {
    const jsonUserInfo = await FileSystem.getInfoAsync(USERS_PATH)

    if(!jsonUserInfo.exists || jsonUserInfo.isDirectory) {
        throw new UserError('users.json file doesn\'t exists')
    }

    const users = getUsers()

    const userIndex = users.findIndex(({ id }) => id === userId)

    if(userIndex !== -1) {
        const removedUser = users.splice(userIndex, 1)

        await FileSystem.writeAsStringAsync(USERS_PATH, users)

        return removedUser
    }

    throw new UserError(`User with id: ${userId} doesn't found`)
}