const Discord = require('discord.js');
exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor('#36393e')
    .setTitle('<a:down:494172443108442134> Novidades do bot:')
    .setDescription('Aqui aparecem as novidades sobre comandos e novas atualizações de comandos antigos.')
    .addField('<:data:494172742992527365> 27/09/2018', '`y!serverinfo` Adicionado')
    .addField('<:data:494172742992527365> 28/09/2018', 'Servidor de suporte criado. Dê `y!sobre`')
    .addField('<:data:494172742992527365> 28/09/2018', '<@433308632319393823> integra na parte de ajudar nos comandos do bot')
    .setFooter(`Todos os direitos reservados © ${bot.user.username}`, bot.user.displayAvatarURL)
    message.channel.send(embed)
}