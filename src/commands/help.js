const Command = require('../structures/Command.js');
const Discord = require("discord.js");

module.exports = new Command({
    name: "help",
    desc: "replies with commands",
    
    async run(message, args, client) {

        const embed = new Discord.MessageEmbed();

        embed
        .setFields({
            name: 'CUmandos',
            value: '`pig` says oink oink\n `dbd` random dead by daylight build\n`cult` random dbd character to start a cult\n `phasmo` random phasmo challenge\n `owo` owofies a sentence\n `cow` makes a cow say something\n`pokemon` play guess whos that pokemon'
        })
        .setColor('BLURPLE')
        .setAuthor('deez commands', 'https://64.media.tumblr.com/996870c15f72ecb6f7dc4c302c58c0db/tumblr_inline_nl3wn0pPte1swzql2.png')

       message.channel.send({ embeds: [embed] });
    }
});