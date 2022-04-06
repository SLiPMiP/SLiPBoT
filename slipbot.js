console.log('Initializing SLiPBoT')

const Discord = require('discord.js')
const client = new Discord.Client()
client.login('')

client.on('ready', readyDiscord)

function readyDiscord() {
    console.log('initialized')
}

client.on('message', gotMessage)

function gotMessage(msg) {
    console.log(msg.content)
    if (msg.channel.id == '659842093379878924' && msg.content == 'Hello slip') {
        // msg.reply('Hello') //also tags them in the message
        msg.channel.send('Hello')
    }
}