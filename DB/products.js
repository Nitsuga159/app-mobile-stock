import { APP_PATH, PRODUCTS_CELLS } from "../env"
import * as FileSystem from 'expo-file-system'
import FileError from "../errors/FileError"

function hashProduct({ userId }) {
    return userId.split('').reduce((acc, letter) => letter.charCodeAt() + acc, 0) % PRODUCTS_CELLS
}

function getProductDirectory({ userId }) {
    return APP_PATH + userId + '/products/'
}

function getRandomHashCodeProducts({ hashTableJson, hashCodes }) {
    let selectedHashCodeInfo, hashCode
    
    //Get random hashCodeInfo
    do {
        hashCode = hashCodes[Math.floor(Math.random() * hashCodes.length)]
        selectedHashCodeInfo = hashTableJson[hashCode] 
    } while(selectedHashCodeInfo.productsLength === 0)

    return hashCode
}

export const getUserProducts = async ({ userId, hashCode, omit = [] }) => {
    const PRODUCTS_PATH = getProductDirectory({ userId }) + 'hash-table.json'

    const hashTableJsonInfo = await FileSystem.getInfoAsync(PRODUCTS_PATH)

    if(!hashTableJsonInfo.exists) {
        throw new FileError(`File hash-table.json doesn't exists in user '${userId}'`)
    }

    const hashTableJson = JSON.parse(await FileSystem.readAsStringAsync(PRODUCTS_CELLS))

    //Get codes of this json and filter hash-code that doesn't want
    const hashCodes = Object.keys(hashTableJson).filter(code => !omit.includes(code))

    if(!hashCodes.length) {
        throw new FileError('File hash-table.json doesn\'t have hash codes')
    }

    if(hashCode === undefined) {
        hashCode = getRandomHashCodeProducts({ hashTableJson, hashCodes })
    }

    return JSON.parse(await FileSystem.readAsStringAsync(getProductDirectory() + hashCode + '.json'))
}