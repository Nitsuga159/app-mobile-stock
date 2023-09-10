import * as FileSystem from 'expo-file-system';
import DirectoryError from '../errors/DirectoryError';
import logger from '../logger';
import { APP_PATH } from '../env';

export default async function deleteDirectoryRecursive({ directoryName, isCompleted }) {
    const pathDirectory = isCompleted ? directoryName : APP_PATH + directoryName

    const directoryInfo = await FileSystem.getInfoAsync(pathDirectory);

    if(!directoryInfo.exists) {
        return;
    }

    logger.info(deleteDirectoryRecursive, `Delete directory recursive: ${directoryName}`);

    try {
        const subDirectories = await FileSystem.readDirectoryAsync(pathDirectory)

        for(let subDirectory of subDirectories) {
            logger.info(deleteDirectoryRecursive, `Delete subdirectory '${subDirectory}'`)

            const subDirectoryInfo = await FileSystem.getInfoAsync(pathDirectory + '/' + subDirectory);

            console.log(subDirectoryInfo.exists)

            if(subDirectoryInfo.isDirectory) {
                await deleteDirectoryRecursive({ directoryName: subDirectoryInfo.uri, isCompleted: true })
            } else {
                await FileSystem.deleteAsync(subDirectoryInfo.uri);
            }
        }

        await FileSystem.deleteAsync(directoryInfo.uri);
    } catch(e) {
        throw new DirectoryError(`Cannot delete directory or file '${directoryName}'`, e)
    }
}