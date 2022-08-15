const fetch = require('node-fetch')

const guessslot = (':white_square_button:')
const indicatorslot = (':radio_button:')
const colors = ['red', 'green', 'purple', 'yellow', 'white', 'black']

// super secret code
let ssc = []

// super secret color code
let sscc = []

let tries = 0

function codegen() {
    ssc = []
    sscc = []
    for (let i = 1; i > 0; i++) {
        if (ssc.length == 4) {
            break
        } else {
            // random number
            let rn = Math.floor(Math.random() * colors.length)
            if (ssc.includes(rn)) {} else {
                ssc.push(rn)
            }
        }
    }
    for (let i = 0; i < ssc.length; i++) {
        sscc.push(colors[ssc[i]])
    }
}
// right color slot
let rcs = 0;
// right color
let rc = 0

async function guess(msg, args) {
    for (let i = 0; i < args.length; i++) {
        if (sscc[i] == args[i]) {
            rcs += 1
        } else if (sscc.includes(args[i])) {
            rc += 1
        }
    }
    if (rcs = 4) {
        msg.channel.send('youve guessed:\n***' + args.join(" ") + '***\n***' + rcs + '*** right colors, in the right slot\n***' + rc + '***right colors, but in the wrong slots\nWait a minute, youve WONN!?!??!1?!?1+1++?!+1')
        msg.channel.send('AAAAAAAAAAAAA HOW COULD THIS HAAAAPEEEENNNNNNN\n MY SON-INATOR WILL NEVER LOOK ME IN THE EYES AGAIN\n HOW COULD YOU DO THIS, MY REPUTATION HAS BEEN SEVERELY DAMAGED\nINITIATE BOMB-INATOR')
        let keywords = 'explosion'
        let curl = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&client_key=my_test_app&limit=5`
        let response = await fetch(curl)
        let json = await response.json()
        const randomgif = Math.floor(Math.random() * json.results.length)
        msg.channel.send(json.results[randomgif].url)
    }
}

module.exports = function(msg, args) {


    if (args[0] == 'test' || args[0] == 't') {
        msg.channel.send('Mastermind!\nempty guess slot ' + guessslot + '\ncolor right/wrong/almost slot ' + indicatorslot + '\ncolors available ' + colors.join(" ") + '\ncolor code generated ' + ssc.join(" ") + '\ncolors from generated code ' + sscc.join(" "))
    }

    if (msg.author.id == process.env.SLIPID) {
        if (args[0] == 'ass' || args[0] == 'a') {
            if (ssc.length == 0) {
                msg.channel.send('ssc emptyy')
            } else {
                msg.channel.send(ssc.join(" ") + '\n' + sscc.join(" "))
            }
        }
    }

    if (args.length == 0) {
        msg.channel.send("You must define what you want\nheres a list of all the commands\nmastermind + \n**start|end|restart|rules**\n;**guess** (or just g)\n;**help** (how to play).\nTo start a game, use the command:\n!mastermind start")
    }

    if (args[0] == 'start' || args[0] == 's') {
        msg.channel.send('YOU DARE CHALLENGE Me??!?\n IN A DUEL OF WITS NO LESSS!??\nI SHALL TEST YOUR WITS,\nONLY THE MINDS OF MASTERS CAN GUESS MY SECRET COOOOOoooOODeee.....\n-------------------\nthe colors to choose from are\n***' + colors.join(" ") + '***\nHMMmmmmmMMM what COooOODE should i Useee??...')
        codegen()
        tries = 10
        msg.channel.send('My mastermind-inator has generated an un-guessable code now!\nRemember, you only have 10 tries!')
    }

    if (args[0] == 'guess' || args[0] == 'g') {
        args.shift()
        guess(msg, args)
        rcs = 0
        rc = 0
    }
}