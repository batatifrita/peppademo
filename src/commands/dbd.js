const Command = require('../structures/Command.js');
const Discord = require("discord.js");


var survivors = [
    "dwight","meg","claudette","jake","bill","laurie","ace","nea",
    "feng","david","steve","detective tapp","kate","adam","jeff",
    "jane (THICCUMS)","ash","nancy","quentin","zarina","yui","cheryl",
    "felix","elodie","yun-jin","jill","leon", "mikaela", "jonah"
]

var survivors_extra = [ "meg", "claudette", "your pick", 
    "jake", "dwight", "bill", "nea","david", "kate"
]

var perks = [
    "iron will","borrowed time","kindred","spine chill","prove thyself",
    "decisive strike","adrenaline","dead hard","unbreakable","innter strength",
    "we'll make it","for the people","resilience","sprint burst","deliverance",
    "nothing","quick & quiet","soul guard","fixated","smash hit","alert","lithe",
    "desperate measures","built to last","resurgence","bond","head on","rookie sprint",
    "balanced landing","bite the bullet","empathy","deception","we're gonna live forever",
    "counterforce","flashbang","blast mine","flip-flop","detective's hunch","urban evasion",
    "lucky break","blood pact","any means necessary","diversion","dark sense","red herring",
    "vigil","tenacity","leader","windows of opportunity","aftercare","second win",
    "small game","repressed alliance","power struggle","saboteur","self-care","streetwise",
    "object of obsession","dance with me","off the record","breakout","open-handed","distortion",
    "botany knowledge","fast track","boil over","autodidact","mettle of man","plunderer's instinct",
    "better together","lightweight","poised","self-preservation","stake out","appraisal","ace in the hole",
    "solidarity","nothing","breakdown","calm spirit","pharmacy","hope","camaraderie","visionary",
    "deja vu","wake up","buckle up","technician","no one left behind","left behind",
    "babysitter","premonition","up the ante","slippery meat","this is not happening","no mither",
    "sole survivor","you pick"
]

var perks_extra = [
    "dark sense","deja vu","hope","kindred","lightweight","nothing",
    "no one left behind","plunderer's instinct","premonition","resilience",
    "slippery meat","small game","spine chill","nothing","this is not happening",
    "we'll make it","borrowed time","left behind","unbreakable","botany knowledge",
    "empathy","self-care","dead hard","no mither","bond","leader","prove thyself",
    "calm spirit","iron will","saboteur","head on","adrenaline","quick & quiet",
    "sprint burst","inner strength","balanced landing","streetwise","urban evasion",
]

var items = [
    "chinese firecrackers","med kit","toolbox","no item","flashlight",
    "key","map","your pick", "no item"
]

var outfit = [
    "eboy/egirl","BRIGHT BRIGHT BRIGHT","as dark as u can","at least ONE pink item",
    "your pick", "wear a HAT","at least ONE red item","beto/beta"
]

module.exports = new Command({
    name: "dbd",
    desc: "replies with a random survivor, random perk build and a random item",
    
    async run(message, args, client) {

        const randSurv = Math.floor(Math.random() * survivors.length);
        const randItem = Math.floor(Math.random() * items.length);
        const randSurv_extra = Math.floor(Math.random() * survivors_extra.length);

        var randPerk1 = Math.floor(Math.random() * perks.length);
        var randPerk2 = Math.floor(Math.random() * perks.length);
        while(randPerk2===randPerk1) randPerk2 = Math.floor(Math.random() * perks.length);
        var randPerk3 = Math.floor(Math.random() * perks.length);
        while(randPerk3===randPerk1 || randPerk3===randPerk2) randPerk3 = Math.floor(Math.random() * perks.length);

        var randPerk1_extra = Math.floor(Math.random() * perks_extra.length);
        var randPerk2_extra = Math.floor(Math.random() * perks_extra.length);
        while(randPerk2_extra===randPerk1_extra) randPerk2_extra = Math.floor(Math.random() * perks_extra.length);

        const randFit = Math.floor(Math.random() * outfit.length);

        const embed = new Discord.MessageEmbed();

        embed
        .setFields(
            { 
                name: '**survivor**',
                value: '`' + survivors[randSurv] + '`',
                inline: true
            },
            { 
                name: '**can switch w/**',
                value: '`' + survivors_extra[randSurv_extra] + '`',
                inline: true
            },
            { 
                name: '**outfit**',
                value: '`' + outfit[randFit] + '`',
            },
            { 
                name: '**perks**',
                value: '`' + perks[randPerk1] + '`' + '\n' + '`' + perks[randPerk2] + '`',
                inline: true
            },
            { 
                name: '**can switch w/**',
                value: '`' + perks_extra[randPerk1_extra] + '`' + '\n' + '`' + perks_extra[randPerk2_extra] + '`',
                inline: true 
            },
            { 
                name: '**item**',
                value: '`' + items[randItem] + '`',
            },
        )
        .setColor("RED")
        .setAuthor('dbd random build', 'https://i.imgur.com/7nl3HLn.jpg')
        .setFooter("GOOD LUCK!!!!");

       message.channel.send({ embeds: [embed] });
    }
});