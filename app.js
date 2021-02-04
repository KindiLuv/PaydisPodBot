//Require the module
const Discord = require(discord.js);

//Instanciate the client
const client = new Discord.Client();

//On ready event, start this async code
client.once('ready', () => {
    console.log('ready!');
})

//login with the bot token
client.login(process.env.TOKEN);
