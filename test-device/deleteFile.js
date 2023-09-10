import * as FileSystem from 'expo-file-system'

export default async function(fileName) {
    return await FileSystem.deleteAsync(FileSystem.documentDirectory + fileName)
}