const { Message } = require("discord.js") 
// const { InteractionResponseTypes } = require("discord.js/typings/enums")

const fetch = require('node-fetch')

//greetings
let greetings = ['Hello there', 'howdy', 'Hello', 'hey', 'im blue dabbe de dabbe die', 'ello', 'ayyyyy']

//cool urmom jokes
let urmoms = ['so fat she has her own postal code', 'so manly youre made']

//cooler dad jokes
let dads = ['so manly im the product of mitosis', 'stronger than ur dad', 'cooler than ur dad']

//different commands
let Commands = ['!slippy', '!urmom', '!help', '!ping']

//mastermind
let board = [':white_square_button::white_square_button:white_square_button:white_square_button']

module.exports = async function gotMessage(msg) {
    console.log(msg.content)
    if (msg.content == '!help') {
        msg.channel.send('!help !slippy !urmom !mydad !ping')
    }
    if (msg.content == '!ping') {
        msg.channel.send('PONG')
    }
    if (msg.content == '!slippy') {
        let greet = Math.floor(Math.random() * greetings.length)
        msg.channel.send(greetings[greet])
    }
    if (msg.content == '!urmom') {
        msg.channel.send(urmoms[Math.floor(Math.random() * urmoms.length)])
    }
    if (msg.content == '!mydad') {
        msg.channel.send(dads[Math.floor(Math.random() * dads.length)])
    }
    if (msg.content == 'who') {
        msg.channel.send('asked')
    }
    if (msg.content == 'stfu'){
    msg.delete()
    }    
    if (msg.content == 'asked'){
        if(msg.author.id == process.env.BOTID){
            return
        } 
        else {
            msg.delete()
        }
    }
    if (msg.content == '!gif'){
        msg.channel.send('gif!')
        let curl = `https://tenor.googleapis.com/v2/search?q=excited&key=${process.env.TENORKEY}&client_key=my_test_app&limit=8`
        let response = await fetch(curl)
        let json = await response.json()
        msg.channel.send(json.results[0].url)
    }
}