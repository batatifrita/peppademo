const Command = require('../structures/Command.js');
const Discord = require("discord.js");
const owoify = require('owoify-js').default

module.exports = new Command({
    name: "owo",
    desc: "replies with owofied text",
    
    async run(message, args, client) {
       if (args.length == 0) message.reply("se não me deres nada pra owozar queres que faça o quê???? -__-")
       else message.reply(owoify(args.join(" ")));
    }
});