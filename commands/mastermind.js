const fetch = require('node-fetch')

const guessslot = (':white_square_button:')
const indicatorslot = (':radio_button:')
const colors = ['red', 'green', 'purple', 'yellow', 'white', 'black']

let game = 0

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
            if (ssc.includes(rn)) { } else {
                ssc.push(rn)
            }
        }
    }
    for (let i = 0; i < ssc.length; i++) {
        sscc.push(colors[ssc[i]])
    }
}

function start(msg) {
    if (game == 1) {
        msg.channel.send('You HAVE ALREADY STARTED A GAMEEEEE\nCheck the rules and commands for help with playing ;)')
    } else {
        game = 1
        msg.channel.send('YOU DARE CHALLENGE Me??!?\n IN A DUEL OF WITS NO LESSS!??\nI SHALL TEST YOUR WITS,\nONLY THE MINDS OF MASTERS CAN GUESS MY SECRET COOOOOoooOODeee.....\n-------------------\nthe colors to choose from are\n***' + colors.join(" ") + '***\nHMMmmmmmMMM what COooOODE should i Useee??...')
        codegen()
        tries = 10
        msg.channel.send(`My mastermind-inator has generated an un-guessable code now!\nRemember, you only have ${tries} tries!`)
    }
}


function end() {
    game = 0
    ssc = []
    sscc = []
    tries = 0
}

async function gif(msg, arg) {
    let curl = `https://tenor.googleapis.com/v2/search?q=${arg}&key=${process.env.TENORKEY}&client_key=my_test_app&limit_10`
    let response = await fetch(curl)
    let json = await response.json()
    const randomgif = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[randomgif].url)
}

// right color slot
let rcs = 0;
// right color
let rc = 0

function guess(msg, args) {
    tries = tries - 1

    if (tries > -1) {
        for (let i = 0; i < args.length; i++) {
            if (sscc[i] == args[i]) {
                rcs += 1
            } else if (sscc.includes(args[i])) {
                rc += 1
            }
        }
    }

    msg.channel.send('youve guessed:\n***' + args.join(" ") + '***\n***' + rcs + '*** right colors, in the right slot\n***' + rc + '***right colors, but in the wrong slots' + `\ntries left: ${tries}`)
    if (rcs == 4) {
        msg.channel.send('youve won!')
        gif("winner")
        end()
    } else if (tries == 0) {
        lose(msg)
        end()
    }
    
    rcs = 0
    rc = 0 
}


function lose() {
    msg.channel.send('you have lost!\nThe code was :' + sscc.join(" "))
    gif("loser")
    end()
}

module.exports = function (msg, args) {

    if (args[0] == 'test' || args[0] == 't') {
        msg.channel.send('ok')
        gif(msg, 'winner')
        msg.channel.send('ssc:' + ssc.join(" ") + '\nsscc:' + sscc.join(" ") + '\ngame:' + game + '\ntries:' + tries)
    }

    if (msg.author.id == process.env.SLIPID) {
        if (args[0] == 'ass' || args[0] == 'a') {
            if (ssc.length == 0) {
                msg.channel.send('ssc emptyy')
            } else {
                msg.channel.send(ssc.join(" ") + '\n' + sscc.join(" ") + '\n' + `tries${tries}` + '\n' + `game${game}`)
            }
        }
    }

    if (args.length == 0) {
        msg.channel.send('You must define what you want\nSay "mastermind commands" to se a list of the commands\n or just use mastermind start to start a game')
    }

    if (args[0] == 'start' || args[0] == 's') {
        start(msg)
    }

    if (args[0] == 'guess' || args[0] == 'g') {
        if (game = 1) {
            args.shift()
            if (args.length == 4) {
                if (tries > 0) {
                    guess(msg, args)
                } else if (tries = 0) {
                    lose()
                }
                rcs = 0
                rc = 0
            }
        } else {
            msg.channel.send('You need to start a game before you can make a guess ;)')
        }
    }

    if (args[0] == 'end' || args[0] == 'e') {
        end() 
            msg.channel.send("Game over")
    }

    if (args[0] == 'restart' || args[0] == 'r') {
        end(msg)
        start(msg)
        msg.channel.send("restarted")
    }

    if (args[0] == 'rules') {
        msg.channel.send(`when you start a game the bot calculatyes a code made up of 4 different colors in a certain order.\nYou then have to guess the the right code.\nThere cannot be 2 of the same color in a code.\nYou have a maxiumum of 10 tries.`)
    }

    if (args[0] == 'help') {
        msg.channel.send(`This is a game called MASTERMIND\nIn mastermind, you guess a code against a rival player, in this case it will always be the bot, check the web u nerd `)
    }

    if (args[0] == 'restart' || args[0] == 'r') {
        msg.channel.send('restarting')
        end()
        start(msg)
    }

    if (args[0] == 'rules') {
        // msg.channel.send('***RULES***\nIn mastermind, there is a code-guesser and a maker however, you will **only be guessing** the code.\nWhen you write "!mastermind start", or mm s, the game begins.\nIt also states what colors are within the game.\nThen you use the command "mastermind guess", or mm g, followed by the colors you wish to guess\n***example:***\n***mm g red white black purple***\nthen the bot answers with how many right colors you had and how many of those were in the right slots.')
        msg.channel.send('***xXx_RULES_xXx***\nThe goal of the game is to guess the code the bot has chosen after you start the game with the command "mastermind start", or mm s.\nYou guess by using the command "mastermind guess", or mm g, followed by the colors you wish to guess.\n***xXx_-_EXAMPLE_-_xXx***\nAfter the game has started, the bot might have chosen the code "red black white yellow"\nIf you then say "mm g red white green purple" \nthen the bot would respond saying that you have :\n1 right color in the right spot \nand \n1 right color but in the wrong spot\nafterwards it tells you how many tries there are left.\nIf you have 0 tries, then you lose, but if you guess the right code the game will tell you and end itself.\nIf you want to end a game prematurely, use the command "mastermind end", or mm e.\nTo see a complete list of the commands, use mastermind commands, or mm c ')
    }

    if (args[0] == 'cmds'|| args[0] == 'commands') {
        msg.channel.send('rules\nrestart\nhelp\nrestart\nend\nstart\nquess')
    }
}