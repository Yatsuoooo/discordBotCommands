const Discord = require('discord.js'),
    replies = ['oui.', 'non.', 'peut-être.', 'sûrement.', 'je ne pense pas.', 'je pense que oui.', 'il n\'y a pas beaucoup de chance que ça arrive.', 'à touts les coupes c\'est vrai !', 'il y a des chances que oui', 'tu y croyait vraiment ???', 'malheureusement oui !', 'heureusement que non !', 'comme on dit, inch`\'Dieu !']
 
module.exports = {
    run: (message, args) => {
        const question = args.join(' ')
        if (!question) return message.channel.send('Veuillez indiquer une question.')
        message.channel.send(`:8ball: **${message.author.username}** ${replies[Math.floor(Math.random() * replies.length)]}`)
    },
    name: '8ball'
}