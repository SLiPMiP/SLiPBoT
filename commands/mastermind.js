const guess = (':white_square_button:')
const indicator = (':radio_button:')
const colors = ['red', 'green', 'purple', 'yellow', 'white', 'black']

// super secret code
let ssc = []
    // super secret color code
let sscc = []

function codegen() {
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

module.exports = function(msg, args) {


    if (args[0] == 'test') {
        codegen()
        msg.channel.send('Mastermind!\n' + guess + '\n' + indicator + '\n' + colors.join(" ") + '\n' + ssc.join(" "))
        ssc = []

    }

    if (args[0] == 'ass') {
        msg.channel.send(ssc.join(" "))
    }

    if (args.length < 1) {
        msg.channel.send("You must define what you want\nheres a list of all the commands\nmastermind + \n**start|end|restart|rules**\n;**guess** (or just g)\n;**help** (how to play).\nTo start a game, use the command:\n!mastermind start")
    }

    if (args[0] == 'start') {
        msg.channel.send('YOU DARE CHALLENGE Me??!?\n IN A DUEL OF WITS NO LESSS!??\nI SHALL TEST YOUR WITS,\nONLY THE MINDS OF MASTERS CAN GUESS MY SECRET COOOOOoooOODeee.....')
        msg.channel.send('-------------------\nthe variables to choose from are\n***' + colors.join(" ") + '***')
        msg.channel.send('HMMmmmmmMMM what CODE should i Useee??...')
        codegen()
        msg.channel.send(ssc.join(" "))
    }

}