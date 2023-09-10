import * as FileSystem from 'expo-file-system'
import directories from '../directories.json'

export default async function(directory) {
    return await FileSystem.readDirectoryAsync(FileSystem.documentDirectory + directories.root + directory)
}