// const who = require("./commands/who.js")
// const asked = require('./commands/asked.js')
const gif = require('./commands/gif.js')
    // const mastermind = require('./commands/mastermind.js')

const commands = { gif }

module.exports = function(msg) {
    console.log(msg.author.username, ':', msg.content)

    let tokens = msg.content.split(" ")
    let command = tokens.shift()


    if (msg.author.id == process.env.BOTID) {
        return
    } else {
        console.log("   cmd:", command)
    }


    if (command.charAt(0) === "!") {
        command = command.substring(1)
        commands[command](msg, tokens)
    }


    if (commands.includes(command)) {
        commands[command](msg, tokens)
    }

}