import * as FileSystem from 'expo-file-system'
import directories from '../directories.json'
import FileError from '../errors/FileError'

export default async function() {
    try {
        return JSON.parse(await FileSystem.readAsStringAsync(FileSystem.documentDirectory + directories.users));
    } catch(e) {
        throw new FileError(`Cannot read users.json`, e);
    }
}