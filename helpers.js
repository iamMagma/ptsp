function successfullMessage(msg) {
    return "β *AQUA*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "π *AQUA*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "βΊοΈ *AQUA*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
