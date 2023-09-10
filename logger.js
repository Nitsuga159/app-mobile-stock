function makeLog(functionComponent, type, ...value) {
    console[type](`In '${functionComponent.name}' -`, ...value)
}

export default {
    error: (functionComponent, ...value) => makeLog(functionComponent, "error", ...value),
    info: (functionComponent, ...value) => makeLog(functionComponent, "info", ...value),
    log: (functionComponent, ...value) => makeLog(functionComponent, "log", ...value),
}