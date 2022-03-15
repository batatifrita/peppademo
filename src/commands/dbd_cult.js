const Command = require('../structures/Command.js');
const Discord = require("discord.js");


var survs = [ "meg", "claudette", "your pick", 
"jake", "dwight", "bill","jake","nea"]

module.exports = new Command({
    name: "cult",
    desc: "replies with a random dbd cult",
    
    async run(message, args, client) {

        const rand = Math.floor(Math.random() * survs.length);
        const embed = new Discord.MessageEmbed();

        embed
        .setFields({
            name: "**and the winner is...**",
            value: "`" + survs[rand] + "! try your best to make EVERYONE use them :p`"
        })
        .setColor("DARK_RED")
        .setAuthor('dbd random cult', 'https://i.imgur.com/7nl3HLn.jpg')
        .setFooter("bonus if you take a screenshot!!");

       message.channel.send({ embeds: [embed] });
    }
});