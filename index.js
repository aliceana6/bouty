require('http').createServer().listen(8000)
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');

bot.on("ready", () => {
    console.log(`Bot foi iniciado, com ${bot.users.size} usuários, em ${bot.channels.size} canais, em ${bot.guilds.size} servidores.`); 
  });



bot.on('message', async message => {

    if (message.author.bot) return;
    if (!message.content.startsWith(config.prefix)) return;

    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);
    //

    try {
      let commandFile = require(`./comandos/${command}.js`);
      commandFile.run(bot, message, args);
    } catch (err) {
        message.channel.send(`<:error:493555073691942912> **| ${message.author.username} Não consegui achar este comando no meu banco de dados.**`)
      console.error(err);
    }



});
bot.login(config.token);
