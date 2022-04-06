//greetings
let greetings = ['Hello there', 'howdy', 'Hello', 'hey', 'im blue dabbe de dabbe die', 'ello', 'ayyyyy']

//cool urmom jokes
let urmoms = ['so fat she has her own postal code', 'so manly youre made']

//cooler dad jokes
let dads = ['so manly im the product of mitosis', 'stronger than ur dad', 'cooler than ur dad']

//different commands
let Commands = ['!slippy', '!urmom', '!help', '!ping']

module.exports = function gotMessage(msg) {
    console.log(msg.content)
    if (msg.content == '!help') {
        msg.channel.send('help', 'slippy', 'urmom', 'mydad', 'ping')
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
}