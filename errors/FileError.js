export default class FileError extends Error {
    constructor(message, e) {
        super(message);

        if(e) {
            console.error(e)
        }
    }
}