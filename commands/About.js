const Commando = require('discord.js-commando');
const RichEmbed = require('discord.js');

module.exports = class AboutCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'about',
            group: 'hudson',
            memberName: 'about',
            description: 'A word about this bot'
        });
    }

    async run(message) {
        console.log('[Hudson.CommandLog] about command initiated from ' + message.author + ' on ' + message.guild +' with message ID : ' + message.id);

        await message.channel.send({
            embed: {
                thumbnail: {
                    url: 'https://cdn.discordapp.com/app-icons/480405424877731841/d23a2a786f4eeef80974e9c9b85d0b56.png?size=512'
                },
                title: 'About Hudson',
                color: 0,
                description: 'This is Hudson, his job is to please most of your requests. It has full computational knowledge and can answer everything in every field. Besides it can post random sexy girl pictures and predict your future.',
                footer: {
                    text: 'Hudson 1.0.0 is a good bot from Jérémy "Emeto" Castellano'
                }
            }
        });

        console.log('[Hudson.CommandLog] Command from message ID : ' + message.id + ' has been successfully executed.');
    }
};