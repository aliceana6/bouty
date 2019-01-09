const Discord = require('discord.js');
const moment = require("moment");
require("moment-duration-format");
moment.locale('pt-BR');
exports.run = (bot, message, args) => {
    let usuario = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]) || message.author);
    let cargos = usuario.roles.map(a => a).join(", ")/*coloca isso aqui de baixo do 'let usuario'*/;
    let cor = 0x4286f4; /*aqui você pode colocar a cor que quiser*/
    let administrador;
    if(usuario.hasPermission("ADMINISTRATOR") === true) administrador = "Sim";
    if(usuario.hasPermission("ADMINISTRATOR") === false) administrador = "Não";
    let statusmebro;
    if(usuario.presence.status === "dnd") statusmebro = "<:perturbar:493809490127486976> Não pertubar";
    if(usuario.presence.status === "idle") statusmebro = "<:ausente:493809488801955851> Ausente";
    if(usuario.presence.status === "stream") statusmebro = "<:stream:493814683825078282> Transmitindo";
    if(usuario.presence.status === "offline") statusmebro = "<:off:493809490022367233> Invisível";
    if(usuario.presence.status === "online") statusmebro = "<:online:493809489804263426> Disponível";
    let userinfoembed = new Discord.RichEmbed()
      .setThumbnail(usuario.user.displayAvatarURL)
      .setTimestamp()
      .setFooter(`Comando requisitado por: ${message.author.tag}`, message.author.displayAvatarURL)
      .addField(`<:discord:493806989332185111> Principais informações:`, `<:PandaProfit:493552125876371457> Usuário: ${usuario.user.tag}\n🆔 Id: ${usuario.user.id}\n<:PepeBebendoCafe:494197455185772566> Status: ${statusmebro}\n🎮 Jogando: ${usuario.user.presence.game ? usuario.user.presence.game.name : 'Nada no momento'}`)
      .addField(`<a:hypesquad:493809488923721738> Informações no servidor:`, `<:Clyde:493806988271026176> Cargos: ${usuario.roles.size || "Sem cargos"}\n<:staff:493806989789626369> Administrador: ${administrador}`)
      .setColor(cor)
        message.channel.send(userinfoembed);
}