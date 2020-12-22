const config = require('../config.json'),
    fs = require('fs'),
    Discord = require('discord.js')
 
module.exports = {
    run: async (message, args, client) => {
        reason = args[0]
        if (!reason) return message.channel.send('Veuillez indiquer une raison pour votre ticket.').then(sent => sent.delete({timeout: 5e3}), message.delete())
        if (Object.values(client.db.tickets).some(ticket => ticket.author === message.author.id)) return message.channel.send('Vous avez déjà un ticket d\'ouvert.').then(sent => sent.delete({timeout: 5e3}), message.delete())
        const channel = await message.guild.channels.create(`ticket ${message.author.username}`, {
            type: 'text',
            parent: config.ticket.category,
            permissionOverwrites: [{
                id: message.guild.id,
                deny: 'VIEW_CHANNEL'
            }, {
                id: message.author.id,
                allow: 'VIEW_CHANNEL'
            }, ...config.ticket.roles.map(id => ({
                id,
                allow: 'VIEW_CHANNEL'
            }))]
        })
        client.db.tickets[channel.id] = {
            author: message.author.id
        }
        fs.writeFileSync('./db.json', JSON.stringify(client.db))
        channel.send(new Discord.MessageEmbed()
            .setAuthor("Ticket !", message.author.displayAvatarURL())
            .setDescription(`Bonjour ${message.member}, bienvenue dans votre ticket. Nous allons nous occuper de vous\nN'oublie pas de faire \`$close\` pour fermer ton ticket !`)
            .addField('Raison du ticket', args.join(' '))
            .setFooter(`Ticket demandé par ${message.author.username}`)
            .setTimestamp()
            .setColor("#8dec8d")
            )
            message.guild.channels.cache.get(config.ticketLogs).send(new Discord.MessageEmbed()
            .setDescription(`:ticket: **Nouveau ticket de ${message.author.username}**\n\n:paperclip: **Raison(s) :**\n\`\`\`⚠️ ${args.join(" ")}\`\`\`\n:dividers: **ID de l'utilisateur :**\n\`\`\`${message.author.id}\`\`\``)
       .setColor('#2F3136'))
        message.channel.send(`Votre ticket ${channel} a été créé !`).then(sent => sent.delete({timeout: 5e3}), message.delete())
    },
    name: 'ticket',
    guildOnly: true
}