const Command = require('../structures/Command.js');
const Discord = require("discord.js");


var challenges = [
    "do u have abandonment issues? that's too bad! only one person can enter the building at once :p",
    "no flashlights, no lightswitches. ONLY candles hehe",
    "what the fuck is light? we don't need that! investigate the room from start to finish without ANY light!!!",
    "see how low your sanity can get without you dying :D bonus points if you keep a scoreboard",
    "say my name, say my name... go an entire round ONLY speaking the ghost's name",
    "your team can only pick ONE item at a time",
    "communicate with the ghost. like seriously. you HAVE to talk during hunts",
    "you're a thief! take EVERY item in the house and puut it in the van",
    "IT'S PARTY TIME! fill the ghost room with items",
    "do u like reality shows? ur gonna love this one! set up video cameras around the house. now one of you will go inside and try to find the ghost while everyone else just watches",
    "🚨 LOCKDOWN 🚨 everyone goes into the house and cannot leave until the objectives are completed",
    "ban a random item! (gerador para isto em breve maybe)",
    "SMILE FOR THE PICTURE! you have to get as many pictures of the ghost as you can",
    "TAG, YOU'RE IT! play tag with the ghosts. or your team",
    "bzzz bzz what's that sound? ruh roh, you can't use the radio!",
    "hiding is for pussies. if the ghost is hunting, just run",
    "bring a bunch of flashlights, UV lights, glowsticks, candles, etc. to the ghost room. play music and party until the ghost kills everyone just like in the movies"
]

module.exports = new Command({
    name: "phasmo",
    desc: "replies with a random phasmophobia challenge",
    
    async run(message, args, client) {

        const rand = Math.floor(Math.random() * challenges.length);
        const embed = new Discord.MessageEmbed();

        embed
        .setFields({
            name: '**challenge #' + rand + "**",
            value: "`" + challenges[rand] + "`"
        })
        .setColor("#5491CB")
        .setAuthor('phasmo challenges :p', 'https://i.imgur.com/nSwBmuA.png')
        .setFooter("hope u get killed HEHEHE");

       // message.channel.send()
       message.channel.send({ embeds: [embed] });
    }
});