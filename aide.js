const Discord = require('discord.js'),
      config = require('../config.json')

module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('> ** :Non:  Désolé mais Vous n\'avez Pas la Permission D\'effectuez cette action !**')
        const count = args[0]
        if (!/\d+/.test(count)) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**Veuillez indiquer un nombre De message à supprimer.**')
        .setColor("#2F3136"))
        if (count < 1 || count > 99) return message.channel.send(new Discord.MessageEmbed()
        .setDescription('**Le nombre De message Doit être compris entre 1 et 99.**')
        .setColor("#2F3136"))
        const { size } = await message.channel.bulkDelete(Number(count) + 1, true)
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`:1_: **: ${size - 1} messages ont été supprimé !**`)
        .setColor("#2F3136")).then(sent => sent.delete({timeout: 5e3}))
    },
    name: 'aide',
    guildOnly: true
}