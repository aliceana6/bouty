exports.run = (bot, message, args) => {
    if (message.author.id !== '470691663799648266') return message.channel.send('Somente meu dono pode utilizar este comando.');

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
    } catch (e) {
        return message.channel.send(`Unable to reload: ${args[0]}`);
    }

    message.channel.send(`**${args[0]}** Reiniciado com sucesso!`)
}