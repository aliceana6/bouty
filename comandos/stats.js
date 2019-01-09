exports.run = (bot, message, args) => {
    const Discord = require('discord.js');

    if (message.author.id !== '470691663799648266') return message.channel.send('Somente meu dono pode utilizar este comando.');

    let stats = args.join(" ");
    if(!stats) return message.channel.send("Escreva algo antes.");
    bot.user.setActivity(stats, {type: "WATCHING"});
    bot.user.setPresence({
        status: 'dnd',
    })

    let embed = new Discord.RichEmbed()
    .setColor('#2EFE2E')
    .setTitle('<:sucesso:493554594341847052> Status trocado!')
    .addField('<:perturbar:493809490127486976> Novo status:', `${stats}`)
    message.channel.send(embed)
}