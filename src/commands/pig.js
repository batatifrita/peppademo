const Command = require('../structures/Command.js');

module.exports = new Command({
    name: "porca",
    desc: "faz oink",
    
    async run(message, args, client) {

        message.channel.send("oink oink! 🐽");
        
    }
});