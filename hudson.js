const dotenv = require('dotenv');
const Commando = require('discord.js-commando');

/**
 * Hudson Main File
 * ----
 * Hudson is a Discord bot that can answer most of your requests
 * ----
 * @author Jérémy Castellano <contact@emetophobic.com>
 */

console.log(
    '>> >=>             >=> >>       >=>    >=>              >=>                              \n' +
    '>>   >=>         >=>   >>       >=>    >=>              >=>                              \n' +
    '>>     >=>     >=>     >>       >=>    >=> >=>  >=>     >=>  >===>     >=>     >==>>==>  \n' +
    '         >=> >=>                >=====>>=> >=>  >=>  >=>>=> >=>      >=>  >=>   >=>  >=> \n' +
    '>>     >=>     >=>     >>       >=>    >=> >=>  >=> >>  >=>   >==>  >=>    >=>  >=>  >=> \n' +
    '>>   >=>         >=>   >>       >=>    >=> >=>  >=> >>  >=>     >=>  >=>  >=>   >=>  >=> \n' +
    '>> >=>             >=> >>       >=>    >=>   >==>=>  >=>>=> >=> >=>    >=>     >==>  >=> \n'
);

/**
 * Now timestamp used to get the execution time when the bot is ready
 * @type {number}
 */
let now = Date.now();

/**
 * Check for any errors in our .env configuration file
 */
console.log('[DotEnv.Config.Parser] Parsing configuration file...');
const config = dotenv.config();
if(config.error) {
    throw config.error;
} else {
    console.log('[DotEnv.Config.Parser] Configuration file is valid');
}

/**
 * Initialize the Command framework for all of our commands
 */
console.log('[Discord.Client] Initializing client...');
const client = new Commando.Client({
    owner: process.env.BOT_OWNER_ID,
    commandPrefix: '!'
});

/**
 * Register our commands, commands groups and arguments types
 */
console.log('[Discord.Command.Registry] Registering commands and groups...');
client.registry
    .registerGroups([
        ['hudson', 'All Hudson commands']
    ])
    .registerDefaults()
    .registerCommands([
        require('./commands/About'),
        require('./commands/Girl'),
        require('./commands/QuestionAnswer'),
        require('./commands/Magic8Ball')
    ]);

/**
 * Our Discord client listen for the ready event and set our bot playing status
 */
client.on('ready', () => {
    console.log('[Hudson.Init] Setting presence status...');
    client.user.setPresence({ status: 'online', game: { name: process.env.PRESENCE_GAME_NAME } });

    console.log('[Hudson.Init] I am Hudson 1.0.0 and here to serve');

    let initTime = Date.now() - now;
    console.log('[Hudson.Ready] Hudson Bot ready to accept commands. Started in ' + initTime / 1000 + ' s');
});

client.login(process.env.DISCORD_BOT_TOKEN);