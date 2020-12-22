const Discord = require('discord.js'),
    config = require('../config.json'),
    reactions = ['🇦', '🇧', '🇨', '🇩', '🇪', '🇫', '🇬', '🇭', '🇮', '🇯', '🇰', '🇱', '🇲', '🇳', '🇴', '🇵', '🇶', '🇷', '🇸', '🇹']
 
module.exports = {
    run: async (message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.')
        const [question, ...choices] = args.join(' ').split(' | ')
        if (!question) return message.channel.send('Veuillez indiquer la question à poser.')
        if (!choices.length) return message.channel.send('Veuillez indiquer au moins 1 choix.')
        if (choices.length > 20) return message.channel.send('Il ne peut pas y avoir plus de 20 choix.')
        message.delete()
        const sent = await message.channel.send(new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription(choices.map((choice, i) => `${reactions[i]} ${choice}`).join('\n\n'))
            .setFooter(`Send by ${message.author.username} | ID : ${message.author.id}`)
            .setTimestamp()
            .setColor('#9af79b')
            )
        for (i = 0; i < choices.length; i++) await sent.react(reactions[i])

        message.guild.channels.cache.get(config.logs).send(new Discord.MessageEmbed()
        .setAuthor(`[POLL] ${message.author.username}`, message.author.displayAvatarURL())
        .addField('Modérateur', message.author, true)
        .addField('Question', question, true)
        .addField('Choix', choices, true)
        .setColor('#FF0000'))
    },
    name: 'poll',
    guildOnly: true
}