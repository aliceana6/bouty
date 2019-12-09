exports.run = (bot, message, args) => {
    const Discord = require('discord.js');

    if (message.author.id !== '470691663799648266') return message.channel.send('Somente meu dono pode utilizar este comando.');

    /*let stats = args.join(" ");
    if(!stats) return message.channel.send("Escreva algo antes.");
    bot.user.setActivity(stats, {type: "WATCHING"});
    bot.user.setPresence({
        status: 'dnd',
    })

    let embed = new Discord.RichEmbed()
    .setColor('#2EFE2E')
    .setTitle('<:sucesso:493554594341847052> Status trocado!')
    .addField('<:perturbar:493809490127486976> Novo status:', `${stats}`)
    message.channel.send(embed)*/
    let embed = new Discord.RichEmbed()
    .setColor('#2EFE2E')
    .setTitle('<:sucesso:493554594341847052> Status trocado!')
    if(args[0]){
        if(args[0] === 'status'){
            if(args[1]){
                bot.user.setStatus(args[1])
                .addField('<:perturbar:493809490127486976> Novo status:', `${args[1]}`)
            } else {
                return message.channel.send('Você precisa me informar o novo status, sendo eles: `dnd`, `online` e `idle`')
            }
        } else if(args[0] === 'activity' || args[0] === 'atividade'){
            let status = args[1]
            let activity = args.slice(2).join(' ')
            if(status){
                if(activity){
                    bot.user.setActivity(activity, { type: status })
                    .addField('<:perturbar:493809490127486976> Nova atividade:', `${activity}`)
                } else {
                    return message.channel.send('Você precisa me informar o que vai aparecer no meu perfil')
                }
            } else {
                return message.channel.send('Você precisa me informar o tipo de atividade, que são: `PLAYING`, `WATCHING` e `LISTENING`')
            }
        }
    } else {
        return message.channel.send('Você precisa me informar se o que você quer setar é um `status` ou uma `atividade`')
    }
    message.channel.send(embed)
}
