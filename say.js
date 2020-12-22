const config = require('../config.json'),
      Discord = require('discord.js')

module.exports = {
    run: (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas las permission d\'utiliser cette commande.')
        if (!args[0]) return message.channel.send('Veuillez indiquer le texte à envoyer.')
        message.delete()
        message.channel.send(message.content.trim().slice(`${config.prefix}say `.length))
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[SAY] #${message.channel.name}`, message.author.displayAvatarURL())
        .addField('Modérateur', message.author, true)
        .addField('Contenu', `\`${message.content.trim().slice(`${config.prefix}say `.length)}\``, true)
        .setColor('#FF0000'))
    },
    name: 'say'
}