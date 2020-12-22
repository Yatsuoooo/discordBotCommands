const fs = require('fs'),
      Discord = require('discord.js'),
      config = require('../config.json')

module.exports = {
    run: async (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Tu n\'as pas la permission pour executer cette commande !')
        const member = message.mentions.members.first()
        if (!member) return message.channel.send('Veuillez mentionner le membre à warn.')
        if (member.id === message.guild.ownerID) return message.channel.send('Tu ne peux pas warn un membre avec un rôle supérieur au tien !')
        if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Tu ne peux pas warn ce membre !')
        const reason = args.slice(1).join(' ')
        if (!reason) return message.channel.send('Veuillez indiquer une raison.')
       if (!client.db.warns[member.id]) client.db.warns[member.id] = []
       client.db.warns[member.id].unshift({
           reason,
           date: Date.now(),
           mod: message.author.id,
           modUsername : message.author.username
       })
       fs.writeFileSync('./db.json', JSON.stringify(client.db))
       message.channel.send(`${member} a été warn pour ${reason} !`)
       message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
       .setAuthor(`[WARN] ${member.user.tag}`, member.user.displayAvatarURL())
       .addField('Utilisateur', member, true)
       .addField('Modérateur', message.author, true)
       .addField('Raison', reason, true)
       .setColor('#FF0000'))

       message.mentions.members.first().send(`Vous avez été warn par **${message.author.username}** pour **${reason}** !`)
    },
    name: 'warn',
    guildOnly: true
}