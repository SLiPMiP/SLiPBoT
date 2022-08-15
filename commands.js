const who = require("./commands/who.js")
const asked = require('./commands/asked.js')
const gif = require('./commands/gif.js')
const mastermind = require('./commands/mastermind.js')

const commands = { gif, who, asked, mastermind }



module.exports = function(msg) {
    console.log(msg.author.username, ':', msg.content)

    let tokens = msg.content.split(" ")
    let command = tokens.shift()


    if (msg.author.id == process.env.BOTID) {
        return
    } else {
        console.log("   cmd:", command)
    }

    // commands with prefixes work now
    // but commands that require prefix also works without
    if (command.charAt(0) === "!") {
        command = command.substring(1)
        commands[command](msg, tokens)
    } else {
        commands[command](msg, tokens)
    }

}