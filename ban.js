const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('Tu n\'as pas la permission pour executer cette commande !')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à bannir.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne peux pas bannir un membre avec un rôle supérieur au tien !')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas bannir ce membre !')
        if (!member.bannable) return message.channel.send('Le bot ne peux pas bannir ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.ban({reason})
        message.channel.send(`${member.user.tag} a été banni !`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[BAN] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .addField('Durée', '♾️', true)
        .setColor('#FF0000'))
    },
    name: 'ban',
    guildOnly: true
}