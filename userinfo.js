const Discord = require('discord.js')
     moment = require('moment')
module.exports = {
    run: (message, args, client) => {
        const member = message.mentions.members.first() || message.member
        message.channel.send(new Discord.MessageEmbed()
        .addField('Membre :', member, true)
        .addField('Tag :', member.user.tag)
        .addField('Date de création :', moment(member.user.createdAt).format('[Le] DD/MM/YY [à] HH:mm:ss'))
        .addField('Date d\'arrivée :', moment(member.joinAt).format('[Le] DD/MM/YY [à] HH:mm:ss'))
        .addField('Boost :', member.premiumSince ? moment(member.premiumSince).format('[Le] DD/MM/YY [à] HH:mm:ss') : 'Ne boost pas', true)
        .setThumbnail(member.user.displayAvatarURL())
        .setFooter(`Send by ${message.author.username} | ID : ${member.id}`)
        .setColor('#FF0000')
        .setTimestamp()
        )
    },
    name: 'userinfo',
    guildOnly: true
}