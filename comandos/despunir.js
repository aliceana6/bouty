exports.run = (bot, message, args) => {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('Você não tem permissão para utilizar este comando.')
    const reason = args.slice(1).join(' ');
    bot.unbanReason = reason;
    bot.unbanAuth = message.author;
    const user = args[0] ? args[0] : message.mentions.users.size > 0 ? message.mentions.users.first().id : false;
    if (!user) return message.reply('Você deve fornecer um ID do usuário que deseja desbanir').catch(console.error);
    message.guild.unban(user);
    message.reply(`O usuário <@${user}> foi desbanido com sucesso.`)
}
