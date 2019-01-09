const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = async (bot, message, args) => {
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bots = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`<:discord:493806989332185111> Informações do servidor: ${message.guild.name}`)
        .setColor("#FF0000")
        .addField('<:owner:493818222861352960> Dono', `<@${message.guild.owner.id}>`, false)
        .addField('<:data:494172742992527365> Criado em:', moment(message.guild.createdAt).format('LLLL'), false)
        .addField("🆔 ID", message.guild.id, false)
        .addField(`<:PandaProfit:493552125876371457> Membros [${totalmembros}]`, `<:online:493809489804263426> Online: ${online} | <:ausente:493809488801955851> Ausente: ${ausente} | <:perturbar:493809490127486976> Ocupado: ${ocupado} | <:off:493809490022367233> Offline: ${offline} | <:Clyde:493806988271026176> Bots: ${bots}`, false)
        .addField(`💬 Canais [${canaistexto+canaisvoz}]`, `📝 Texto: ${canaistexto}\n🗣 Voz: ${canaisvoz}`, false)
        .setThumbnail(message.guild.iconURL)
        .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
}