import IO from './IO'
import directories from './directories.json'

export const setEnvironmentPaths = () => {
    const { root } = directories

    directories.paths.forEach(async ({ path, type, initContent }) => {
        if(type === 'DIRECTORY') {
            await IO.createDirectory({ directoryName: root + path });
        } else {
            await IO.createFile({fileName: root + path, content: initContent})
        }
    })
}