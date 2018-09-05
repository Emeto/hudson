const Commando = require('discord.js-commando');
const WolframAlphaAPI = require('wolfram-alpha-api');
const ImgurAPI = require('imgurjs');
const fs = require("fs");

module.exports = class QuestionAnswer extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'qa',
            group: 'hudson',
            memberName: 'qa',
            description: 'Answer any of your question. Powered by Wolfram Alpha.',
            args: [
                {
                    key: 'query',
                    label: 'string',
                    type: 'string',
                    prompt: 'Your question'
                }
            ]
        });
    }

    async run(message, args) {

        message.channel.startTyping();

        console.log('[Hudson.CommandLog] qa command initiated from ' + message.author + ' on ' + message.guild +' with message ID : ' + message.id);
        const wolfram = WolframAlphaAPI(process.env.WOLFRAM_APP_ID);

        await wolfram.getFull({
            input: args.query
        }).then((resultset) => {
            const pods = resultset.pods;
            const fields = [];

            pods.map((pod) => {
                const field = {
                    name: pod.title,
                    value: '',
                    inline: true
                };

                pod.subpods.map(subPod => {
                    if(subPod.plaintext === '') {
                        field.value = subPod.img.src;
                    } else {
                        field.value = subPod.plaintext;
                    }
                });

                fields.push(field);
            });

            message.channel.send({
                embed: {
                    color: 0,
                    fields: fields,
                    footer: {
                        icon_url: 'http://cdn.marketplaceimages.windowsphone.com/v8/images/5c3253d8-cc60-4f68-ac1a-0acec9d76fb6?imageType=ws_icon_large',
                        text: 'Answer provided by Wolfram|Alpha'
                    }
                }
            });

        }).catch((e) => message.channel.send(e.message));

        message.channel.stopTyping();

        console.log('[Hudson.CommandLog] Command from message ID : ' + message.id + ' has been successfully executed.');
    }
};