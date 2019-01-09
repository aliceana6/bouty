const Discord = require('discord.js');
exports.run = (bot, message, args) => {
    message.delete();
    var say = args.join(' ');
    let bug = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('<:PepeBebendoCafe:494197455185772566> Nova sugestão')
    .addField('<:PandaProfit:493552125876371457> Enviada por:', `${message.author} | ${message.author.tag}`)
    .addField('<:BlueReach:493818712529567764> Sugestão:', `${say}`)
    message.guild.members.find(m => m.id === "470691663799648266").send(bug);
    message.channel.send(`<:sucesso:493554594341847052> **| ${message.author.username} sua sugestão foi enviada com sucesso**`)

}