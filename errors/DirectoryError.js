export default class DirectoryError extends Error {
    constructor(message, e) {
        super(message);

        if(e) {
            console.error(e)
        }
    }
}