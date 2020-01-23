const Commando = require('discord.js-commando');

module.exports = class GirlCommand extends Commando.Command {
    constructor(client) {
        super(client, {
           name: 'girl',
           group: 'hudson',
           memberName: 'girl',
           description: 'Post a random sexy girl picture to the channel'
        });
    }

    async run(message) {

        message.channel.startTyping();

        let phrases = [
            'Here you go sir.',
            'One smoking hot chick for you sir.',
            'Hope this one is at your taste sir.'
        ];

        console.log('[Hudson.CommandLog] girl command initiated from ' + message.author + ' on ' + message.guild +' with message ID : ' + message.id);

        let selected_phrase = phrases[Math.floor(Math.random()*phrases.length)];

        let fileName = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

        await message.channel.send(selected_phrase, {
            files: [{
                attachment: 'https://air-traffic.itoss.ovh/jets/random',
                name: fileName + '.jpg'
            }]
        });

        message.channel.stopTyping();

        console.log('[Hudson.CommandLog] Command from message ID : ' + message.id + ' has been successfully executed.');
    }
};