const fetch = require('node-fetch')

module.exports = async function(msg, args) {
    if (args.length > 0) {
        keywords = args.join(" ")
    } else {
        keywords = 'gif'
    }
    let curl = `https://tenor.googleapis.com/v2/search?q=${keywords}&key=${process.env.TENORKEY}&client_key=my_test_app`
    let response = await fetch(curl)
    let json = await response.json()
    const randomgif = Math.floor(Math.random() * json.results.length)
    msg.channel.send(json.results[randomgif].url)
}