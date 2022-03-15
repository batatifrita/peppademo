const Command = require('../structures/Command.js');
const Discord = require("discord.js");

var img_urls = [ "https://i.imgur.com/pe072wJ.png", "https://i.imgur.com/qjfO3Zj.png" ]

module.exports = new Command({
    name: "pokemon",
    desc: "play who's that pokemon",
    
    async run(message, args, client) {

        const glasses = new Discord.MessageAttachment("https://i.imgur.com/qkDPGpA.png");
        const embed = new Discord.MessageEmbed();
        var rand = Math.floor(Math.random() * img_urls.length);
    
        if (args.length == 0){
            embed
            .setFields({
                name: "WHO'S THAT POKEMON???",
                value: 'come on... this is easy!'
            })
            .setImage(img_urls[rand])
            .setColor("RED");

            message.channel.send({ embeds: [embed] });
        } 

        else if(args[0] == "peppa"){
            embed
            .setFields({
                name: "a sua resposta está CERTAAAAA!!!!",
                value: 'with great power comes great responsibility... cuida bem disto....'
            })
            .setImage("https://i.imgur.com/I8Idjdq.jpg")
            .setColor("RED");

            message.channel.send({ embeds: [embed] });
        } else message.reply({ content:"tás a gozar né? toma lá disto, que precisas... ", files: [glasses]});
    }
});