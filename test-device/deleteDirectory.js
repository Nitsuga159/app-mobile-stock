import IO from "../IO";

export default async function(directoryName) {
    await IO.deleteDirectoryRecursive({ directoryName })

    return true
}