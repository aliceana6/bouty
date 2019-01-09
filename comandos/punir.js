const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Você não tem permissão para utilizar este comando.');
    if (!args[0]) return message.channel.send({embed: {
      color: 0x00ff00,
      description: `<> - Parâmetros obrigadotrios\n() - Parâmetros opcionais\n\n${message.author} Utilize:\n**y!punir <@Membro> <Motivo>**`
    }});
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(`Não consegui encontrar o usuário mencionado.`);
    if(bUser.id === bot.user.id) return message.channel.send(`Eu não tenho permissão para banir este usuário.`);
    let bReason = args.join(" ").slice(22);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Eu não tenho permissão para banir este usuário.`);

    let banEmbed = new Discord.RichEmbed()
    .setColor("#bc0000")
    .addField("<:FeelsBanMan:494224488733474826> Usuário banido", `${bUser}`)
    .addField("<:staff:493806989789626369> Banido por", `<@${message.author.id}> `)
    .addField("<:data:494172742992527365> Banido em", message.channel)
    .addField("<:comem:494224770947219466> Razão", bReason);

    message.guild.member(bUser).ban(bReason);
    message.channel.send(banEmbed);
}

module.exports.config = {
  command:"ban"
}