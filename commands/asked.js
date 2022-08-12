module.exports = function (msg, args) {
    if (msg.author.id == process.env.BOTID) {
        return
    }
    else {
        msg.delete()
    }
}