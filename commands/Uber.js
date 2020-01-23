const Commando = require('discord.js-commando');

module.exports = class UberCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'uber',
            group: 'hudson',
            memberName: 'uber',
            description: 'Ask for a uber to your destination'
        });
    }

    async run(message) {

    }
};