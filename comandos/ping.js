const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, message, args) => {
    
    const m = message.channel.send({embed: {
        color: 0x36393e,
        title: "<:sucesso:493554594341847052> Clique na reação para mais informações\n ",
        description: "🏓 | Seu ping\n\n🖥 | Ping da API"
    }}).then(msg=>{
        msg.react('🏓').then(r=>{
            msg.react('🖥').then(r=>{
            })
        });


const qualquercoisafilter2 = (reaction, user) => reaction.emoji.name === '🏓' && user.id === message.author.id;
const qualquercoisafilter3 = (reaction, user) => reaction.emoji.name === '🖥' && user.id === message.author.id;
const qualquercoisa2 = msg.createReactionCollector(qualquercoisafilter2, { time: 60000 });
const qualquercoisa3 = msg.createReactionCollector(qualquercoisafilter3, { time: 60000 });

qualquercoisa2.on('collect', r2 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:PeepoPing:494198029532790786> Seu ping:",
        description: `${new Date().getTime() - message.createdTimestamp}`
    }});
  })
qualquercoisa3.on('collect', r3 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:BlobPhinging:494198030421983243> Ping da API",
        description: `${Math.round(bot.ping)}`
    }});
})
})
}