const Discord = require('discord.js'),
      config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande !')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send('Veuillez indiquer un nombre de message à supprimer.')
        if (count < 1 || count > 99) return message.channel.send('Le nombre de message doit être compris entre 1 et 99.')
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(`${size - 1} messages ont été supprimé !`).then(sent => sent.delete({timeout: 5e3}))
        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[CLEAR] ${message.channel.name}`, message.author.displayAvatarURL())
        .addField('Message clear', size - 1, true)
        .addField('Modérateur', message.author, true)
        .setColor('#FF0000'))
    },
    name: 'clear',
    guildOnly: true
}