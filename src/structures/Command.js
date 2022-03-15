const Discord = require("discord.js");

/**
 * 
 * @param {Discord.Message | Discord.Interaction} message 
 * @param {string[]} args 
 * @param {Client} client 
 */

function runFunction(message, args, client){}

class Command {
    /**
     * @typedef {{name: string, desc: string, run: runFunction}} commandOptions
     * @param {commandOptions} options 
     */
    constructor(options) {
        this.name = options.name;
        this.desc = options.description;
        this.run = options.run;
    }
}

module.exports = Command;