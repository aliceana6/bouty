const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.displayAvatarURL)
    .setColor('#36393e')
    .setTitle('<a:hypesquad:493809488923721738> Informações:')
    .setDescription('Aqui estão minhas principais informações.')
    .addField('<:data:494172742992527365> Projeto Iniciado:', '`24/09/2018`', true)
    .addField('<a:down:494172443108442134> Última atualização:', '`30/09/2018`', true)
    .addField('<a:ponteiro:494173153480671232> Prefixo:', '`y!`', true)
    .addField('<:java:493836702540890122> Plataforma:', '`Node.js`', true)
    .addField('<a:load:494209464115658772> Novidades:', '`y!novidades`', true)
    .addField('<:Clyde:493806988271026176> Ajuda:', '`y!ajuda`', true)
    .addField('<:site:494246570183622666> Website:', '`Em Desenvolvimento`', true)
    .addField('<:Servers:494230189379813408> Servidores:', '`' + bot.guilds.size + '`', true)
    .addField('<:PandaProfit:493552125876371457> Usuários:', '`' + bot.users.size + '`', true)
    .addField('<:link:495016320148963359> Links:', '**[Suporte](https://discord.gg/KDgQqGD)**\n**[Convite](https://discordapp.com/api/oauth2/authorize?client_id=494895925227945984&permissions=8&scope=bot)**', true)
    .setFooter(`Todos direitos reservados © ${bot.user.username}`, `${bot.user.displayAvatarURL}`, true)
    message.channel.send(embed)

}