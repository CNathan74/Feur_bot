const Discord = require('discord.js');
const client = new Discord.Client();

const express = require("express")
const app = express()

var nconf = require('nconf');
nconf.use('file', { file: 'config.json' });
nconf.load();

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

// Répondre à un message
client.on("message", function (message) {
    let msg = message.content.toLowerCase()
    if((msg === "feur!img")) {
        let channels = nconf.get("channel")
        let channelId = -1
        let channelIndex = -1
        for (let i = 0; i < channels.length; i++) {
            if(channels[i].id === message.channel.id){
                channelId = message.channel.id
                channelIndex = i
            }
        }
        if(channelId === -1){
            nconf.set(channels[channels.length]+":id", message.channel.id)
            nconf.set(channels[channels.length]+":feur_img", true)
        }
        else
        {
            nconf.set(channels[channelIndex]+":feur_img", !nconf.get('feur_img'))
        }
        nconf.save()
        message.channel.send("img : " + nconf.get('feur_img'))
    }
    if ((msg.endsWith("quoi") === true) || (msg.endsWith("quoi ?") === true) || (msg.endsWith("quoi?") === true)) {
        message.react('🇫')
        message.react('🇪')
        message.react('🇺')
        message.react('🇷')
        //message.channel.send("Feur")
        /*if(nconf.get('feur_img') === true) {
            message.channel.send("https://i.imgflip.com/1bt9uj.jpg")
        }*/
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
    if((msg.indexOf("@here") !== -1)){
        message.channel.send("Faut pas faire ça.")
    }

    if((msg === ("faut pas faire ça."))){
        message.channel.send("Toi même")
    }

    if((msg.indexOf("des chips")) !== -1) {
        message.channel.send("https://tenor.com/view/graziano-emmanuelle-emmanuelle-graziano-chips-eat-gif-20289023")
    }

    if((msg.indexOf("grave") !== -1) && (msg.indexOf("-grave-") === -1)) {
        message.channel.send("https://tenor.com/view/bah-non-grave-hyper-pas-gif-20249630")
    }
})

client.login("ODE0NjE0MjE2NjE4ODAzMjAx.YDganA.6qrNEVfkCY52nbuHRhFDMryUfYE");
