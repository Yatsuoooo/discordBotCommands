const Discord = require("discord.js")

module.exports = {
    run: async (message, client) => {
        const role = message.guild.roles.cache.find(role => role.name === 'JavaScriptTrainer')
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("Vous n'avez pas les permissions requise !")
        var ping = Date.now() - message.createdTimestamp + " ms";
        message.channel.send(new Discord.MessageEmbed()
        .setTitle(`Requested by ${message.author.username}`)
        .setDescription("**Check Bot**\n\nHello, World !\n\n**Online**\nTrue\n\n**Ping** **Pong !** :ping_pong: `" + `${Date.now() - message.createdTimestamp}` + " ms`")
        .setFooter('JavaScriptTrainer by .Yatsuoo#0647 | V1.0', 'https://cdn.discordapp.com/attachments/515225088690487296/762313410993324042/qnLjHzXe_400x400.jpg')
        .setTimestamp()
        .setColor(role.hexColor)
        )
    },
    name: "check",
}