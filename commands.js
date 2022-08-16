const who = require("./commands/who.js")
const asked = require('./commands/asked.js')
const gif = require('./commands/gif.js')
const mastermind = require('./commands/mastermind.js')
const mm = mastermind

const commands = { gif, who, asked, mastermind, mm }
const cmds = Object.keys(commands)



module.exports = function(msg) {
    let tokens = msg.content.split(" ")
    let command = tokens.shift()

    // commands with prefixes work now
    // but commands that require prefix also works without
    if (command.charAt(0) === "!") {
        command = command.substring(1)
        commands[command](msg, tokens)
    } else {
        if (cmds.includes(command)) {
            commands[command](msg, tokens)
        }
    }

    if (msg.author.id == process.env.BOTID) {
        return
    } else {
        console.log(msg.author.username, ':', msg.content)
        console.log("   cmd:", command)
    }

}