const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let member = message.mentions.users.size > 0 ? message.mentions.users.first() : args[0] && bot.users.get(args[0]) ? bot.users.get(args[0]) : message.author;
    let avatar = member.displayAvatarURL;
    if (avatar.endsWith(".gif")) avatar = `${member.displayAvatarURL}?size=2048`
    
    let embed = new Discord.RichEmbed()
    .setTitle(`🖼 ${member.username}`)
    .setColor(`#58FAF4`)
    .setDescription(`**[Clique aqui para baixar a imagem](${avatar})**`)
    .setImage(avatar)
    message.channel.send(embed)
}

module.exports.config = {
    command: 'avatar'
}
