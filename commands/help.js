const Discord = require("discord.js");
const botconfig = require("../botconfig.json");

module.exports.run = async (bot, message, args) => {

    let prefix = botconfig.prefix;
    if (!message.content.startsWith(prefix)) return;
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setThumbnail(bicon)
        .addField("Default Prefix", `s!`)
        .addField("Commands", `**Auto Filter :** Psovke jebo vas bog.\n**Ban :** It will __ban__ any user as long the bot has a higher role\ns! <ban> <user> <reason>\n**Kick :** It will __kick__ any user as long the bot has a higher role\ns! <kick> <user> <reason>\n**Mute :** it will __mute__ an user for which ever amount of time you want\ns!<mute> <user> <HH:mm:ss>\n**Unmute :** It will __unmute__ any user\ns!<unmute> <user>\n**Say :** It will say anything you want, have in mind this is only for Admin's\ns!<say> <what you want to say>\n**Clear :** it will clear up 100 messages no older than 14 days\ns!<clear> <amount of messages>\n`)
        .addBlankField()
        .addField("Guild Commands", `**Server Info :** It wil show the server's info\ns! <serverinfo>\n**User Info : ** It will show you the bot's information\ns! <userinfo>\n**Bot Info :** it will show you the bot's information\ns! <serverinfo>\n** Lockdown :** it will lockdown any channel as long as the bot has the proper permissions\ns! <lockdown hh-mm-ss>\n if you wish to unlock the channel before the cooldown is done you could do **s! <lockdown release or unlock** `)
        .setFooter(`Requested by : ${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL)
        .setColor('RANDOM');

    message.channel.send(botembed);
}

module.exports.help = {
    name: "help"
}
