import * as FileSystem from 'expo-file-system'
import { APP_PATH } from '../env'

export default async function(fileName) {
    return await FileSystem.readAsStringAsync(APP_PATH + fileName)
}