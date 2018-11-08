const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By ESMAEL");





client.on("ready", () => {
let channel = client.channels.get("509450326923804686")
setInterval(function() {
channel.send(`prince prince prince prince prince prince prince prince prince prince prince prince prince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince princeprince prince prince prince prince prince`);
}, 25)
})














var prefix = "s";
client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

if (command == "s") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');


message.channel.sendMessage(args.join(" "))
message.delete()
}
});















client.login(process.env.BOT_TOKEN);
