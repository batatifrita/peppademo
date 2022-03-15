const Discord = require("discord.js");
const Command = require("./Command.js");
const Event = require("./Event.js");
const intents = new Discord.Intents(32767);
const fs = require("fs");
const config = require("../data/config.json");


class Client extends Discord.Client {
    constructor(){
        super({intents, allowedMentions: { repliedUser: false} });

        /**
         * @type {Discord.Collection<string, Command>}
         */
        this.commands = new Discord.Collection();
        this.prefix = config.prefix;
    }

    start(token){

        fs.readdirSync("./src/commands")
        .filter(file => file.endsWith(".js"))
        .forEach(file => {
            /**
             * @type {Command}
             */
            const command = require(`../commands/${file}`);
            console.log(`command ${command.name} loaded`);
            this.commands.set(command.name, command);
        });

        fs.readdirSync("./src/events")
            .filter(file => file.endsWith(".js"))
            .forEach(file => {
                /**
                 * @type {Event}
                 */
                const event = require(`../events/${file}`);
                console.log(`event ${event.event} loaded`);
                this.on(event.event, event.run.bind(null, this));
            })

        this.login(token);

    }
}

module.exports = Client;