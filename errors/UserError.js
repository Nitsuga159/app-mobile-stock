export default class UserError extends Error {
    constructor(message, e) {
        super(message);

        if(e) {
            console.error(e)
        }
    }
}