import * as FileSystem from 'expo-file-system';
import FileError from '../errors/FileError';
import { APP_PATH } from '../env';

export default async function({ fileName, content, isCompleted = false }) {
    const pathFile = isCompleted ? fileName : APP_PATH + fileName

    const file = await FileSystem.getInfoAsync(pathFile);

    if(file.exists) {
        return;
    }

    try {
        await FileSystem.writeAsStringAsync(pathFile, content);
    } catch(e) {
        throw new FileError(`Cannot create file '${fileName}'`, e);
    }
}