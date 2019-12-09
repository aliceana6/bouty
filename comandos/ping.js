const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, message, args) => {
    let emojis = ['🏓','🖥']
    const msg = await message.channel.send({embed: {
        color: 0x36393e,
        title: "<:sucesso:493554594341847052> Clique na reação para mais informações\n ",
        description: "🏓 | Seu ping\n\n🖥 | Ping da API"
    }})
    for(const emoji of emojis){
        await msg.react(emoji)
    }
    const myPingFilter = (reaction, user) => reaction.emoji.name === '🏓' && user.id === message.author.id;
    const APIFilter = (reaction, user) => reaction.emoji.name === '🖥' && user.id === message.author.id;
    const myPing = msg.createReactionCollector(myPingFilter, { time: 60000 });
    const API = msg.createReactionCollector(APIFilter, { time: 60000 });

    myPing.on('collect', r2 => { 
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:PeepoPing:494198029532790786> Seu ping:",
            description: `${new Date().getTime() - message.createdTimestamp}`
        }});
    })
    API.on('collect', r3 => { 
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:BlobPhinging:494198030421983243> Ping da API",
            description: `${Math.round(bot.ping)}`
        }});
    })
}
