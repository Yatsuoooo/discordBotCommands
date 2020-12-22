const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    message.delete()
    if(!message.member.hasPermission('ADMINISTRATOR')) return;

    let OpenTicket = new Discord.MessageEmbed()
    .setDescription('React `🎫` for open a ticket')

    message.channel.send(OpenTicket)
    .then(msg => msg.react('🎫'))
}

module.exports.config = {
    name: 'openticket'
}