const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NjE5ODk2Njk5NDY0NDUwMDY4.XXO7Bw.IyR4jt_2TfNqcRdPCI7NYbuuCZg);//where BOT_TOKEN is the token of our bot
