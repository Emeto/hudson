const Commando = require('discord.js-commando');

module.exports = class EvaCommand extends Commando.Command {
    constructor(client) {
        super(client, {
            name: 'eva',
            group: 'hudson',
            memberName: 'eva',
            description: 'Mon bel algorithme pour toi.',
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