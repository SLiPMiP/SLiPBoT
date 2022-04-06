console.log('Initializing SLiPBoT')

require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_REACTIONS',
    ]
})

client.login(process.env.BOTTOKEN)

client.on('ready', readyDiscord)

function readyDiscord() {
    console.log('initialized')
}

const commandHandler = require('./commands')

client.on('message', commandHandler)