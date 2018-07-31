const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "^";

client.on('ready', function(){    
    var ms = 40000 ;    
    var setGame = ['Jungle | 1.4k Member'];    
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`http://www.youtube.com/gg`);    
}, ms);    
    
});


client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('guildMemberAdd', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('472718413689520129').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
});

client.on('guildMemberRemove', member => {
    const botCount = member.guild.members.filter(m=>m.user.bot).size
    const memberCount = [member.guild.memberCount] - [botCount]
    client.channels.get('472718413689520129').setName(`⟫『 ${memberCount} عدد الاعضاء 』⟪`);
});


client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('473813274383613963');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Voice Online: ${currentSize}`);
  if (currentSize !== size) channel.setName(`Voice Online: ${currentSize}`);
});


client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
