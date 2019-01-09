module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Você não tem permissão para utilizar este comando.');
    const user = message.mentions.users.first();
    const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
    if (!amount) return message.reply('Especifique a quantidade de mensagens que você quer deletar. (Com limite de 100 mensagens)');
    if (!amount && !user) return message.reply('Você deve especificar um usuário e quantidade, ou apenas uma quantidade, de mensagens para limpar. (Com limite de 100 mensagens)');
    message.channel.fetchMessages({
        limit: amount,
    }).then((messages) => {
        if (user) {
            const filterBy = user ? user.id : Client.user.id;
            messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
        }
        message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
    });
}

module.exports.config = {
    command: 'limparmsg'
}