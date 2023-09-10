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

    static toJsonUsers(users) {
        return JSON.stringify(
            users.map(user => ({ username: user.getUsername(), birthday: user.getBirthday(), id: user.getId() }))
        )
    }

    #id
    #username
    #birthday
}