const Event = require("../structures/Event.js");

module.exports = new Event("interactionCreate", (client, interaction) => {
    
    if(interaction.isCommand()){
        const args = [
            interaction.commandName,
            ...client.commands
                .find(cmd => cmd.name.toLowerCase() == interaction.commandName)
        ];

        const command = client.commands.find(cmd => cmd.name.toLowerCase() == interaction.commandName);
        const permission = interaction.member.permissions.has(command.permission);
        if (!command) return interaction.reply("not a valid command!");

        if (!permission)
            return interaction.reply(
                "you do not have the correct permissions to run this command!"
            );

        command.run(interaction, args, client);

    } 

    if(interaction.isButton()){
        if(interaction.customId === 'primary'){
            interaction.reply("this this working");
        }
    }



});