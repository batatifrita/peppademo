const Event = require("../structures/Event.js");

function respond(message){
    message.reply('esse comando não existe!!!!');
    message.channel.send('https://tenor.com/bi6Qr.gif')
}

module.exports = new Event("messageCreate", (client, message) => {
    if(message.author.bot) return;


    if(!message.content.startsWith(client.prefix)) return;

    const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmdFile = client.commands.find(cmd => cmd.name == command);

    if (!cmdFile) return respond(message);

	// const permission = message.member.permissions.has(command.permission, true);
	// if (!permission) return message.reply("you don't have the permission \`${command.permission}\` to run this command!");

    cmdFile.run(message, args, client);
})