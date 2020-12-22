module.exports = {
    run: async (message, client, args) => {
         const member = message.mentions.members.first()
         const memberId = message.guild.members.cache.get(args[0])
        if (!member && !memberId) {
            message.channel.send(`${message.author.avatarURL()}`)
        }
        if (member && !memberId) {
            message.channel.send(`${member.user.displayAvatarURL()}`)
        }
        if (memberId && !member) {
            message.channel.send(`${message.guild.members.cache.get(args[0]).displayAvatarURL()}`)
        }
    },
    name: 'avatar',
    guildOnly: true
}