const fs = require('fs')
 
module.exports = {
    run: async (message, args, client) => {
        reason = args[0]
        const channel = message.mentions.channels.first() || message.channel
        if (!client.db.tickets[channel.id]) return message.channel.send('Ce salon n\'est pas un ticket.')
        if (!message.member.hasPermission('MANAGE_MESSAGES') && client.db.tickets[channel.id].author !== message.author.id) return message.channel.send('Vous n\'avez pas la permission de fermer ce ticket.')
        delete client.db.tickets[channel.id]
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        await message.channel.send(`Le ticket ${channel.name} a été fermé !`)
        channel.delete()
        message.guild.channels.cache.get(config.ticketLogs).send(new Discord.MessageEmbed()
        .setDescription(`:ticket: **Fermeture du ticket de ${message.author.username}**\n\n:paperclip: **Raison de la fermeture :**\n\`\`\`⚠️ ${args.join(" ") || 'Aucune raison fournit'}\`\`\`\n:dividers: **ID de l'utilisateur :**\n\`\`\`${message.author.id}\`\`\`\n:dividers: **Fermeture du ticket :**\n\`\`\`${message.channel.id}\`\`\``)
       .setColor('#2F3136'))
    },
    name: 'close',
    guildOnly: true
}