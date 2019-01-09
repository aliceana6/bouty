module.exports.run = async (bot, message, args) => {
    if (message.author.id !== '470691663799648266') return;

    resetBot(message.channel)
    async function resetBot(channel) {
        let token = bot.token;
        await message.react(':sucesso:493554594341847052')
            .then(message => bot.destroy())
            .then(message => bot.destroy())
            .then(() => bot.login(token));
        message.channel.send('`Bot reiniciado com sucesso.`')
    }
}
module.exports.config = {
    command: 'resetbot'
}