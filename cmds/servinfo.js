const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
let inline = true
let servericon = message.guild.iconURL;
let serverembed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor(message.guild.name)
.addField("Nom :", message.guild.name, inline)
.addField('Owneur:', message.guild.owner, inline)
.addField("ID :", message.guild.id, inline)
.addField("Région :", message.guild.region, inline)
.addField("Roles :", message.guild.roles.cache.size, inline)
.addField("Salons :", message.guild.channels.cache.size , inline)

message.channel.send(serverembed)
}

module.exports.config = {
  name : "serveur"
}