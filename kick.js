const Discord = require('discord.js'),
    config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('Tu n\'as pas la permission pour executer cette commande !')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à exclure.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne peux pas exclure un membre avec un rôle supérieur au tien !')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas exclure ce membre !')
        if (!member.kickable) return message.channel.send('Le bot ne peux pas exclure ce membre.')
        const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
        await member.kick(reason)
        message.channel.send(`${member.user.tag} a été exlu !`)
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[KICK] ${member.user.tag}`, member.user.displayAvatarURL())
        .addField('Utilisateur', member, true)
        .addField('Modérateur', message.author, true)
        .addField('Raison', reason, true)
        .setColor('#FF0000'))
    },
    name: 'kick',
    guildOnly: true
}