export default class User {
    constructor({ username, birthday, id }) {
        this.#username = username
        this.#birthday = birthday
        this.#id = id
    }

    getUsername() {
        return this.#username
    }

    getBirthday() {
        return this.#birthday
    }

    getId() {
       return this.#id 
    }

    static setUserCollection(users) {
        if(Array.isArray(users)) {
            User.#users = users.map(user => new User(user))
        }
    }

    static getUserCollection() {
        return this.#users
    }

    static #users;
    #id
    #username
    #birthday
}