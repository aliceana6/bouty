const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('Você não tem permissão para utilizar este comando.')
    if (!args[0]) return message.channel.send({embed: {
      color: 0x00ff00,
      description: `<> - Parâmetros obrigadotrios\n() - Parâmetros opcionais\n\n${message.author} Utilize:\n**y!expulsar <@Membro> <Motivo>**`
    }});
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(`Não consegui encontrar o usuário mencionado.`);
    if(kUser.id === bot.user.id) return message.channel.send(`Eu não tenho permissão para expulsar este usuário.`);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Eu não tenho permissão para expulsar este usuário.`);

    let kickEmbed = new Discord.RichEmbed()
    .setColor("#e56b00")
    .addField("<:FeelsBanMan:494224488733474826> Usuário expulso", `${kUser}`)
    .addField("<:staff:493806989789626369> Expulso por", `<@${message.author.id}>`)
    .addField("<:data:494172742992527365> Expulso em", `${message.channel}`)
    .addField("<:comem:494224770947219466> Razão", kReason);


    message.guild.member(kUser).kick(kReason);
    message.channel.send(kickEmbed);
}

module.exports.config = {
  command: "kick"
}