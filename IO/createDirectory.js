import * as FileSystem from 'expo-file-system';
import DirectoryError from '../errors/DirectoryError';

export default async function({ directoryName, isCompleted = false }) {
    const pathDirectory = isCompleted ? directoryName : FileSystem.documentDirectory + directoryName

    const directory = await FileSystem.getInfoAsync(pathDirectory);

    if(directory.exists && directory.isDirectory) {
        return;
    }

    try {
        await FileSystem.makeDirectoryAsync(pathDirectory, { intermediates: true });
    } catch(e) {
        throw new DirectoryError(`Cannot create directory '${directoryName}'`, e);
    }
}