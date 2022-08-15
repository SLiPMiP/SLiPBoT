let guess = (':white_square_button:')
let indic, indicator = (':radio_button:')

module.exports = function(msg, args) {
    msg.channel.send('Mastermind!')
    msg.channel.send(guess)
    msg.channel.send(indic)
}