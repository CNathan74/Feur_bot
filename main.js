const Discord = require('discord.js');
const client = new Discord.Client();


//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    let msg = message.content.toLowerCase()
    if ((msg.endsWith("quoi") === true) || (msg.endsWith("quoi ?") === true) || (msg.endsWith("quoi?") === true)) {
        message.channel.send("Feur")
    }
})

client.login("ODE0NjE0MjE2NjE4ODAzMjAx.YDganA.6qrNEVfkCY52nbuHRhFDMryUfYE");
