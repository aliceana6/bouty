const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = (bot, message, args) => {
    
    const m = message.channel.send({embed: {
        color: 0x36393e,
        title: "<:js:494560264663072768> Vejá minhas categorias",
        description: "📋 | Info\n\n🔒 | Moderação\n\n📥 | Outros\n\n📂 | Bot\n\n⏮ | Menu"
    }}).then(msg=>{
        msg.react('📋').then(r=>{
            msg.react('🔒').then(r=>{
              msg.react('📥').then(r=>{
                  msg.react('📂').then(r=>{
                      msg.react('⏮').then(r=>{

                      })
                  })

              })
            })
        });


const infofilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
const qualquercoisafilter3 = (reaction, user) => reaction.emoji.name === '📥' && user.id === message.author.id;
const qualquercoisafilter1 = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
const qualquercoisafilter4 = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
const qualquercoisafilter5 = (reaction, user) => reaction.emoji.name === '📂' && user.id === message.author.id;
const qualquercoisa5 = msg.createReactionCollector(qualquercoisafilter5, { time: 60000 });
const qualquercoisa4 = msg.createReactionCollector(qualquercoisafilter4, { time: 60000 });
const qualquercoisa1 = msg.createReactionCollector(qualquercoisafilter1, { time: 60000 });
const qualquercoisa2 = msg.createReactionCollector(infofilter, { time: 60000 });
const qualquercoisa3 = msg.createReactionCollector(qualquercoisafilter3, { time: 60000 });

qualquercoisa2.on('collect', r2 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:BlueReach:493818712529567764> Comandos Informativos",
        description: "y!equipe: Equipe responsavel por me deixar online\ny!ping: Ping?\ny!sobre: Algumas informações sobre mim\ny!profile: Informações sobre algum usuário\ny!novidades: Fique por dentro das minhas novidades\ny!serverinfo: Informações da guild"
    }});
  })
qualquercoisa3.on('collect', r3 => { 
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:PepeBebendoCafe:494197455185772566> Outros comandos",
        description: "y!abraçar: Dê um abraço em alguém\ny!ascii: Escreva algo divertido\ny!gerarcpf: Gere um CPF\ny!avatar: Foto de perfil de algum usuário"
    }});
})
qualquercoisa1.on('collect', r1 => {
  msg.edit({embed: {
    color: 0x36393e,
    title: "<:js:494560264663072768> Vejá minhas categorias",
    description: "📋 | Info\n\n🔒 | Moderação\n\n📥 | Outros\n\n📂 | Bot\n\n⏮ | Menu"
  }})
})
qualquercoisa4.on('collect', r4 => {
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:staff:493806989789626369> Comandos Administrativos",
        description: "y!punir: Bane algum usuário\ny!despunir: Desbane algum usuário\ny!limpar: Limpar tantas mensagens de certo canal\ny!expulsar: Expulsa algum usuário"
    }})
})
qualquercoisa5.on('collect', r5 => {
    msg.edit({embed: {
        color: 0x36393e,
        title: "<:java:493836702540890122> Comandos Bot",
        description: "y!enviarcmd: Envie uma sugestão de comando para mim\ny!enviarbug: Envie um bug encontrado"
    }})
})
})
}