const Discord = require('discord.js');
const bot = new Discord.Client
const config = require('./db/config.json')
const fs = require('fs')

bot.commands = new Discord.Collection();
fs.readdir('./cmds/', (err, files) => {
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split('.').pop() === 'js')
  if(jsfile.length <= 0){
    console.log('[CONSOLE]: Aucune commande trouvée')
  }

  jsfile.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    bot.commands.set(props.config.name, props)
  })
})

bot.on("ready", async () => {

  console.log(`✅(${bot.user.username}) est désormait opérationel ✅`)
})

bot.login(config.token)