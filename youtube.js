const Discord = require('discord.js')

module.exports = {
    run: async (message, args) => {
        if (!args[0]) return message.channel.send('Veuillez faire une recherche.')
        const research = args.join('+').split(' ')
        message.channel.send(new Discord.MessageEmbed()
        .setAuthor('Youtube Search', 'https://media.discordapp.net/attachments/659227821398556683/668775497013919744/images_2.png?width=475&height=475')
        .setTitle(`Cliquez pour acceder à votre recherche Youtube`)
        .setDescription(`Voici les résultats de votre recherche **${args.join(' ')}**`)
        .setURL(`https://www.youtube.com/results?search_query=${research}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setColor('#FF0000')
        .setTimestamp()
        )
    },
    name: 'youtube'
}