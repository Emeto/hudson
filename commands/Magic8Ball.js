const Commando = require('discord.js-commando');

module.exports = class Magic8BallCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'm8b',
            group: 'hudson',
            memberName: 'm8b',
            description: 'Demande à la boule magique de prévenir ton avenir',
            args: [
                {
                    key: 'query',
                    label: 'string',
                    type: 'string',
                    prompt: 'Ce que tu souhaites demander à la boule magique'
                }
            ]
        });
    }

    async run(message) {
        console.log('[Hudson.CommandLog] about command initiated from ' + message.author + ' on ' + message.guild +' with message ID : ' + message.id);

        let phrases = [
            'C\'est certain',
            'Essaye plus tard',
            'Essaye encore',
            'Pas d\'avis',
            'C\'est ton destin',
            'Le sort en est jeté',
            'Une chance sur deux',
            'Repose ta question',
            'D\'après moi oui',
            'Oui absolument',
            'Tu peux compter dessus',
            'Sans aucune doute',
            'Très probable',
            'Oui',
            'C\'est bien parti',
            'C\'est non',
            'Peu probable',
            'Faut pas rêver',
            'N\'y compte pas',
            'Impossible'
        ];

        let selected_phrase = phrases[Math.floor(Math.random()*phrases.length)];

        await message.channel.send({
            embed: {
                author:  {
                    name: "Magic 8 Ball",
                    icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Magic8ball.jpg/440px-Magic8ball.jpg"
                },
                color: 0,
                description: selected_phrase,
            }
        });

        console.log('[Hudson.CommandLog] Command from message ID : ' + message.id + ' has been successfully executed.');
    }
}