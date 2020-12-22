const { guildOnly } = require("./userinfo");

const Discord = require('discord.js'),
    moment = require('moment')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .addField('Nom :', message.guild.name, true)
        .addField('Région :', message.guild.region, true)
        .addField('Membres :', `${message.guild.memberCount} membres total\n${message.guild.members.cache.filter(member => !member.user.bot).size} membres\n${message.guild.members.cache.filter(member => member.user.bot).size} bots`, true)
        .addField('Channels :', `${message.guild.channels.cache.size} channels total\n${message.guild.channels.cache.filter(channel => channel.type === 'text').size} salons textuels\n${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} salons vocaux\n${message.guild.channels.cache.filter(channel => channel.type === 'category').size} catégories`, true)
        .addField('Nombre d\'emotes :', `${message.guild.emojis.cache.size} emotes total\n${message.guild.emojis.cache.filter(emoji => !emoji.animated).size} emotes statiques\n${message.guild.emojis.cache.filter(emoji => emoji.animated).size} emotes animés`, true)
        .addField('Rôles :', message.guild.roles.cache.size, true)
        .addField('Propriétaire :', message.guild.owner, true)
        .addField('Date de création :', moment(message.guild.createdAt).format('[Le] DD/MM/YY [à] HH:mm:ss'), true)
        .addField('Nitro boost', `Tier : ${message.guild.premiumTier}\nNombre de boosts : ${message.guild.premiumSubscriptionCount}`, true)
        .setColor('#FF0000')
        .setFooter(`Send by ${message.author.username} | ID : ${message.guild.id}`)
        .setTimestamp()
        .setThumbnail(message.guild.iconURL())
        .setImage(message.guild.bannerURL())
        )
    },
    name: 'serverinfo',
    guildOnly: true
}