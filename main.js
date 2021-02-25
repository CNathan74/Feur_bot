const Discord = require('discord.js');
const client = new Discord.Client();

/*const express = require("express")
const app = express()

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});*/

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    let msg = message.content.toLowerCase()
    if ((msg.endsWith("quoi") === true) || (msg.endsWith("quoi ?") === true) || (msg.endsWith("quoi?") === true)) {
        message.react('🇫')
        message.react('🇪')
        message.react('🇺')
        message.react('🇷')
        //message.channel.send("Feur")
    }
    if ((msg.endsWith("oui") === true) || (msg.endsWith("oiu.") === true) || (msg.endsWith("oui !") === true) || (msg.endsWith("oui ?") === true)) {
        message.channel.send("Stiti")
    }
    if ((msg.endsWith("ah") === true) || (msg.endsWith("ah.") === true) || (msg.endsWith("ah !") === true) || (msg.endsWith("ah!") === true)) {
        //message.channel.send("Stérix")
        message.react('🇸')
        message.react('🇹')
        message.react('🇪')
        message.react('🇷')
        message.react('🇮')
        message.react('🇽')
    }
    if ((msg.endsWith("oh") === true) || (msg.endsWith("oh.") === true) || (msg.endsWith("oh !") === true) || (msg.endsWith("oh!") === true)) {
        //message.channel.send("Bélix")
        message.react('🇧')
        message.react('🇪')
        message.react('🇱')
        message.react('🇮')
        message.react('🇽')
    }
})

client.login("ODE0NjE0MjE2NjE4ODAzMjAx.YDganA.6qrNEVfkCY52nbuHRhFDMryUfYE");
