const Command = require('../structures/Command.js');
const Discord = require("discord.js");

var cowsay = require("cowsay");

module.exports = new Command({
    name: "cow",
    desc: "replies with a cowsay",
    
    async run(message, args, client) {
       if (args.length == 0) message.reply("se não me deres nada pra dizer queres que faça o quê???? -__-")
       else message.channel.send("```" + cowsay.say({ text: args.join(" ") }) + "```");
    }
});