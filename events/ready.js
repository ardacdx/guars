const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

module.exports = async bot => {
  //bot.shard.fetchClientValues("guilds.size").then(async results => {
  //bot.shard.fetchClientValues("users.size").then(async results2 => {
 //let shardi = bot.shard.id + 1;
  var oyun = [
    "VOLT OYNUYOR!",


    //Shard: ${shardi}/${bot.shard.count}",
    `${bot.guilds.size.toLocaleString()} Guilds! ${bot.guilds
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} Members!`
  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  bot.user.setStatus("online")
};
