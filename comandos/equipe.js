const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setColor('#36393e')
    .addField('<:owner:493818222861352960> Criadores:', '`</uTaldePedro>#3192`')
    .addField('<:BlurpleDeveloperIcon:493819826113085452> Desenvolvedores:', '`Nenhum no momento`')
    .addField('<:mallard:493820278669836308> Designers:', '`Nenhum no momento`')
    .addField('<:BlueReach:493818712529567764> Ajudantes:', '`LagPcYT#1855, [̲̅Y̲̅][̲̅T̲̅] Sr.Raphael#7274`')
    .setThumbnail(bot.user.displayAvatarURL)
    message.channel.send(embed)
}