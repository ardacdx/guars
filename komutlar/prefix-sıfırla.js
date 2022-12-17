const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (kontrol == "TR_tr") {

        if (!prefix) {
          const embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`Prefix zaten ayarlanmamış!`)
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix başarıyla sıfırlandı!`)
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
      } else {
        var embed = new Discord.RichEmbed()
          .setDescription(
            "Bu komutu kullanmak için [oy](https://top.gg/bot/665232633529368576/vote) vermeniz gerekmektedir."
          )
          .setColor("BLACK");
        message.channel.send(embed);
      }

  
        if (!prefix) {
          const embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`Prefix is not already set!`)
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
  {
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix has been successfully reset!`)
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        db.delete(`prefix_${message.guild.id}`);
  }

   
        var embed = new Discord.RichEmbed()
          .setDescription(
            "To use this command, you have to give [vote](https://top.gg/bot/665232633529368576/vote)."
          )
          .setColor("BLACK");
        message.channel.send(embed);
      
    
  
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["prefix-reset"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix-sıfırla",
  description: "prefix-sıfırla",
  usage: "prefix-sıfırla"
};
