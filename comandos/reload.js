module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '470691663799648266') return;

    /*resetBot(message.channel)
    async function resetBot(channel) {
        let token = bot.token;
        await message.react(':sucesso:493554594341847052')
            .then(message => bot.destroy())
            .then(message => bot.destroy())
            .then(() => bot.login(token));
        message.channel.send('`Bot reiniciado com sucesso.`')
    }*/
    const resetBot = (message, client) => {
        let token = client.token;
        client.destroy()
        setTimeout(() => client.login(token), 5000)
    }
    await message.react('493554594341847052')
    resetBot(message, bot);
    message.channel.send('`Bot reiniciado com sucesso.`)
}
module.exports.config = {
    command: 'resetbot'
}
