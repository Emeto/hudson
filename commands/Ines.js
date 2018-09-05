const Commando = require('discord.js-commando');

module.exports = class InesCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'ines',
            group: 'hudson',
            memberName: 'ines',
            description: 'Une commande rien que pour toi',
        });
    }

    async run(message) {
        await message.channel.send('```' +
            ' ::::::::  :::::::::: ::::    ::: :::::::::       ::::    ::: :::    ::: :::::::::  :::::::::: ::::::::  \n' +
            ':+:    :+: :+:        :+:+:   :+: :+:    :+:      :+:+:   :+: :+:    :+: :+:    :+: :+:       :+:    :+: \n' +
            '+:+        +:+        :+:+:+  +:+ +:+    +:+      :+:+:+  +:+ +:+    +:+ +:+    +:+ +:+       +:+        \n' +
            '+#++:++#++ +#++:++#   +#+ +:+ +#+ +#+    +:+      +#+ +:+ +#+ +#+    +:+ +#+    +:+ +#++:++#  +#++:++#++ \n' +
            '       +#+ +#+        +#+  +#+#+# +#+    +#+      +#+  +#+#+# +#+    +#+ +#+    +#+ +#+              +#+ \n' +
            '#+#    #+# #+#        #+#   #+#+# #+#    #+#      #+#   #+#+# #+#    #+# #+#    #+# #+#       #+#    #+# \n' +
            ' ########  ########## ###    #### #########       ###    ####  ########  #########  ########## ########  ' + '```');
    }
}