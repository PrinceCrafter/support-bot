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


client.login(process.env.BOT_TOKEN);  //اياكككك تلعب هنا لا تحط توكنك هنا 
