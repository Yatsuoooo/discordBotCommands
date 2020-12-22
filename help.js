const Discord = require('discord.js')
    config = require('../config.json')

module.exports = {
    run : (message, args, client) => {
        const role = message.guild.roles.cache.find(role => role.name === 'JavaScriptTrainer')
        if (args[0]) {
            const command = client.commands.get(args[0].toLowerCase())
            if (!command) return message.channel.send('Cette commande n\'éxiste pas.')
        }
        else {
            message.channel.send(new Discord.MessageEmbed()
            .setTitle('**HELP - JavaScriptTrainer :**')
            .setDescription(`**__Le préfix du bot est :__** \`${config.prefix}\`\n\npour avoir plus d\'info, utilisez : \`${config.prefix}help <command_name>\n(actuellement indisponible) (sauf commandes de modérations (demandez au créateur du BOT.))\`\n\n:video_game: **Commandes fun :**\n\`\`\`bjr, 8ball\`\`\`\n:wrench: **Commandes de modération | admin :**\n\`\`\`ban, kick, mute, warn, unban, unmute, unwarn, tempban, tempmute, clear, embed, lock, unlock, poll\`\`\`\n:mobile_phone: **Commandes utiles :**\n\`\`\`avatar, userinfo, roleinfo, serverinfo\`\`\`\n:chains: **Autres commandes :**\n\`\`\`help\`\`\``)
            .setTimestamp()
            .setFooter('JavaScriptTrainer by .Yatsuoo#0647 | V1.0', 'https://cdn.discordapp.com/attachments/515225088690487296/762313410993324042/qnLjHzXe_400x400.jpg')
            .setColor(role.hexColor)
            )
        }
    },
    name: 'help'
}