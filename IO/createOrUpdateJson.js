import * as FileSystem from 'expo-file-system';
import directories from '../directories';
import DirectoryError from '../errors/DirectoryError';
import FileError from '../errors/FileError';

export default async function({ fileName, jsonData }) {
    const appDirectory = await FileSystem.getInfoAsync(directories.SALES)

    if(!appDirectory.exists || !appDirectory.isDirectory) {
        throw new DirectoryError(`Directory doesn't exists: ${directories.SALES}`);
    }

    try {
        await FileSystem.writeAsStringAsync(`${directories.SALES}${fileName}.json`, JSON.stringify(jsonData));
    } catch(e) {
        throw new FileError(`Cannot read file: ${fileName}.json`, e)
    }
}