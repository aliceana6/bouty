const Discord = require('discord.js');
const bot = new Discord.Client();
exports.run = async(bot, message, args) => {
    const emojis = ['📋', '🔒', '📥', '📂', '⏮']
    const msg = await message.channel.send({ 
        embed: { 
            color: 0x36393e, 
            title: '<:js:494560264663072768> Veja minhas categorias', 
            description: '📋 | Info\n\n🔒 | Moderação\n\n📥 | Outros\n\n📂 | Bot\n\n⏮ | Menu' 
        }
    })
    /*const m = message.channel.send({embed: {
        color: 0x36393e,
        title: "<:js:494560264663072768> Vejá minhas categorias",
        description: "📋 | Info\n\n🔒 | Moderação\n\n📥 | Outros\n\n📂 | Bot\n\n⏮ | Menu"
    }}).then(msg=>{*/
    
        /*msg.react('📋').then(r=>{
            msg.react('🔒').then(r=>{
              msg.react('📥').then(r=>{
                  msg.react('📂').then(r=>{
                      msg.react('⏮').then(r=>{

                      })
                  })

              })
            })
        });*/
    for(const emoji of emojis){
        await msg.react(emoji)
    }


    const infoFilter = (reaction, user) => reaction.emoji.name === '📋' && user.id === message.author.id;
    const othersFilter = (reaction, user) => reaction.emoji.name === '📥' && user.id === message.author.id;
    const arrowFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
    const administrationFilter = (reaction, user) => reaction.emoji.name === '🔒' && user.id === message.author.id;
    const botFilter = (reaction, user) => reaction.emoji.name === '📂' && user.id === message.author.id;
    const botCollector = msg.createReactionCollector(botFilter, { time: 60000 });
    const admin = msg.createReactionCollector(administrationFilter, { time: 60000 });
    const arrow = msg.createReactionCollector(arrowFilter, { time: 60000 });
    const info = msg.createReactionCollector(infoFilter, { time: 60000 });
    const others = msg.createReactionCollector(othersFilter, { time: 60000 });

    info.on('collect', r2 => { 
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:BlueReach:493818712529567764> Comandos Informativos",
            description: "y!equipe: Equipe responsavel por me deixar online\ny!ping: Ping?\ny!sobre: Algumas informações sobre mim\ny!profile: Informações sobre algum usuário\ny!novidades: Fique por dentro das minhas novidades\ny!serverinfo: Informações da guild"
        }});
    })
    others.on('collect', r3 => { 
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:PepeBebendoCafe:494197455185772566> Outros comandos",
            description: "y!abraçar: Dê um abraço em alguém\ny!ascii: Escreva algo divertido\ny!gerarcpf: Gere um CPF\ny!avatar: Foto de perfil de algum usuário"
        }});
    })
    arrow.on('collect', r1 => {
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:js:494560264663072768> Veja minhas categorias",
            description: "📋 | Info\n\n🔒 | Moderação\n\n📥 | Outros\n\n📂 | Bot\n\n⏮ | Menu"
        }})
    })
    admin.on('collect', r4 => {
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:staff:493806989789626369> Comandos Administrativos",
            description: "y!punir: Bane algum usuário\ny!despunir: Desbane algum usuário\ny!limpar: Limpar tantas mensagens de certo canal\ny!expulsar: Expulsa algum usuário"
        }})
    })
    botCollector.on('collect', r5 => {
        msg.edit({embed: {
            color: 0x36393e,
            title: "<:java:493836702540890122> Comandos Bot",
            description: "y!enviarcmd: Envie uma sugestão de comando para mim\ny!enviarbug: Envie um bug encontrado"
        }})
    })
}
