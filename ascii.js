const Discord = require('discord.js'),
    figlet = require("figlet");

module.exports = {
    run: async (message, args) => {
        figlet.text(`${args.join(' ')}`, function (err, data) {
              if (err) {
                  console.log('Something went wrong');
                  console.dir(err);
              }
                message.channel.send(new Discord.MessageEmbed()
              .setDescription(`\`\`\`${data}\`\`\``)
              .setColor('#2F3136'))
            })
    },
    name: "ascii"
}