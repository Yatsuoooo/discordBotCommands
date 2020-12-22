const Discord = require('discord.js')

module.exports = {
    run: message => {
        message.channel.send(new Discord.MessageEmbed()
        .setTitle('Annonce !')
        .setAuthor(`${message.author.username}`)
        .setDescription('[**Invite des gens sur le serveur !**](https://discord.gg/MjJ9FFb)')
        .setColor('#ff0000')
        .addField('blabla c\'est une annonce pour..', 'bla bla bla annonce,\nj\'vais essayer de trouver le truc pour personnaliser ça depuis le chat')
        .setAuthor('.Yatsuoo')
        .setThumbnail('https://cdn.discordapp.com/avatars/242945051544649728/c019c860bc712b9996b9920c2efa5b03.png?size=4096')
        .setTimestamp()
        .setFooter('V.1 JavaScriptTrainer by .Yatsuoo#0647'))
    },
    name: 'embed'
}