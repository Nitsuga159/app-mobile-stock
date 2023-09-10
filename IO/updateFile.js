import * as FileSystem from 'expo-file-system';
import FileError from '../errors/FileError';

export default async function({ path, content, isCompleted = false }) {
    const pathFile = isCompleted ? path : FileSystem.documentDirectory + path

    try {
        await FileSystem.writeAsStringAsync(pathFile, content);
    } catch(e) {
        throw new FileError(`Cannot update file '${path}'`, e);
    }
}