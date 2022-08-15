let guess = (':white_square_button:')
let indicator = (':radio_button:')

module.exports = function(msg, args) {
    if (args[0] == 'test') {
        msg.channel.send('Mastermind!')
        msg.channel.send(guess)
        msg.channel.send(indicator)
    }
    if (args.length < 1) {
        msg.channel.send("You must define what you want\nheres a list of all the commands\nmastermind + \nSTART;END;RESTART\n;GUESS(or just g)\n;HELP (to see this command)\nTo start a game, use the command:\n!mastermind start")
    }
}