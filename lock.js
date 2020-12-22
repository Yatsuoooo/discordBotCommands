const fs = require('fs'),
      Discord = require('discord.js'),
      config = require('../config.json')

module.exports = {
    run: (message, args, client) => {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send('Vous n\'avez pas la permision d\'utiliser cette commande.')
        const channel = message.mentions.channels.first() || message.channel
        if (client.db.lockedChannels.includes(channel.id)) return message.channel.send('Ce salon est déjà vérouillé')
        client.db.lockedChannels.push(channel.id)
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        message.channel.send('Ce salon a été vérouillé !')
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[LOCK] ${channel.name}`)
        .addField('Salon', channel, true)
        .addField('Modérateur', message.author, true)
        .setColor('#FF0000'))
    },
    name: 'lock',
    guildOnly: true
}