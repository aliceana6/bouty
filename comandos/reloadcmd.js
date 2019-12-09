exports.run = (bot, message, args) => {
    if (message.author.id !== '470691663799648266') return message.channel.send('Somente meu dono pode utilizar este comando.');
    /*const command = this.commands.get(commandName) || this.commands.get(this.aliases.get(commandName))
        if (!command) return false
        let dir = command.dir
        this.commands.delete(command.name)
        delete require.cache[require.resolve(`${dir}`)]
        const Command = require(`${dir}`)
        const cmd = new Command(this)
        cmd.dir = dir
        this.commands.set(cmd.name, cmd)
        return true*/
    if(!args[0])) return message.channel.send('Você precisa me informar o comando que eu vou recarregar.')
    try {
        delete require.cache[require.resolve(`../${args[0].endsWith('.js') ? args[0] : args[0] + '.js'}`)]                    
        message.channel.send(`**${args[0]}** Reiniciado com sucesso!`)
    } catch (err){
        console.error(err);
        message.channel.send('Não consegui recarregar este comando')
    }
}
