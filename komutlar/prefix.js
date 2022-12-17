const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "k!";
  if (kontrol == "TR_tr") {
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`Lütfen bir prefix belirtiniz!`)
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
      } else {
        var embed = new Discord.RichEmbed()
          .setDescription(
            "Bu komutu kullanmak için [oy](https://top.gg/bot/665232633529368576/vote) vermeniz gerekmektedir."
          )
          .setColor("BLACK");
        message.channel.send(embed);
      }
    
  {
        let prefix = args.slice(0).join(" ");
        if (!prefix) {
          const embed = new Discord.RichEmbed()
            .setColor("BLACK")
            .setDescription(`Please specify a prefix!`)
            .setFooter(client.user.username, client.user.avatarURL);

          message.channel.send(embed);
          return;
        }
        const embed = new Discord.RichEmbed()
          .setColor("BLACK")
          .setDescription(`Prefix set to; \`${prefix}\`!`)
          .setFooter(client.user.username, client.user.avatarURL);

        message.channel.send(embed);
        db.set(`prefix_${message.guild.id}`, prefix);
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
  aliases: ["prefix"],
  permLevel: 3,
  kategori: "sunucu"
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};
