import { documentDirectory } from "expo-file-system"
import directories from './directories.json'

export const VIEWS = {
    REGISTER: 0,
    HOME: 1,
    USERS: 2,
    LOADING: 3
  }


export const APP_PATH = documentDirectory + directories.root

export const USERS_PATH = APP_PATH + 'users.json'

export const PRODUCTS_CELLS = 30
  