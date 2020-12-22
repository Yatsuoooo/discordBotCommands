const moment = require('moment')
    Discord = require('discord.js')

moment.locale('fr')

module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission pour executer cette commande !')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre dont vous voulez voir les warns.')
        if (!client.db.warns[member.id]) return message.channel.send('Ce membre n\'a aucun warn.')
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`**Total de warn :** ${client.db.warns[member.id].length}\n\n__**10 derniers warns**__\n\n${client.db.warns[member.id].slice(0, 10).map((warn, i) => `**${i + 1}.** ${warn.reason}\nSanctionné ${moment(warn.date).fromNow()} par <@!${warn.mod}>`).join('\n\n')}`)
        .setColor('#ff0000')
        .setFooter(`Send by ${message.author.username}`)
        .setTimestamp()
        )
    },
    name: 'infractions',
    guildOnly: true
}