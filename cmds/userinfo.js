const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let inline = true
  let resence = true
  let mentionedUser = message.mentions.users.first() || message.author;
  const member = message.mentions.members.first() || message.member;
let embed = new MessageEmbed()
.setAuthor(member.user.username)
.setColor("RANDOM")
.addField("Pseudo 👭", `${member.user.tag}`, inline)
.addField("ID 🆔", member.user.id, inline)
.setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        message.channel.send(embed);
}

module.exports.config = {
  name: "user-info"
}