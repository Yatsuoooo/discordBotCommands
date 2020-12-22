const Discord = require('discord.js'),
moment = require('moment')

module .exports = {
    run: message=> {
        const role = message.mentions.roles.first()
        const member = message.member
        if (!role) return message.channel.send('Veuillez mentionner le rôle.')
        message.channel.send(new Discord.MessageEmbed()
        .addField('Role :', role, true)
        .addField('Nombre de membres qui le possède :', role.members.size, true)
        .addField('Couleur :', role.hexColor, true)
        .setColor(role.hexColor)
        .addField('Date de création :', moment(role.createdAt).format('[Le] DD/MM/YY [à] HH:mm:ss'), true)
        .addField('Affiché séparément :', role.hoist ? 'Oui' : 'Non', true)
        .addField('Mentionnable', role.mentionable ? 'Oui' : 'Non', true)
        .setFooter(`Send by ${message.author.username} | ID : ${role.id}`, `${member.user.displayAvatarURL()}`)
        .setTimestamp()
        )
    },
    name: 'roleinfo',
    guildOnly: true
}