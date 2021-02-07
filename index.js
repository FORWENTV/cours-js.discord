const Discord = require('discord.js');
const bot = new Discord.Client
const config = require('./db/config.json')
const fs = require('fs')

bot.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
  if (err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js')
  if (jsfile.length <= 0) {
    console.log('[CONSOLE]: Aucune commande trouvée')
  }

  jsfile.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.config.name, props)
  })
})

bot.on("ready", async () => {

  console.log(`✅(${bot.user.username}) est désormait opérationel ✅`)

  let statuses = [
    "J'aime Elexyr22",
    `En cours de dévelopement`,
    "@FORWEN#0001 => LOVE BG ;)",
  ]

  setInterval(() => {
    let status = statuses[Math.floor(Math.random() * statuses.length)];
    bot.user.setActivity(status, {
      type: "PLAYING"
    })
  }, 5000);

})

bot.on('message', async message => {
  if (message.channel.type === 'dm') return;
  if (message.author.bot) return;
  let prefix = config.prefix;
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  let commandFile = bot.commands.get(command.slice(prefix.length))
  if (commandFile) commandFile.run(bot, message, args)
});


bot.login(config.token)