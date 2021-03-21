//Require the module
const Discord = require('discord.js');
const config = require('./config.json');
const rules = require('./rules.json');

var blue = null;
var orange = null;
//Instanciate the client
const client = new Discord.Client();

//On ready event, start this async code
client.once('ready', () => {
    console.log('ready!');
    client.user.setPresence({
        status: "online",  // You can show online, idle... Do not disturb is dnd
        game: {
            name: "!drk",  // The message shown
            type: "PLAYING" // PLAYING, WATCHING, LISTENING, STREAMING,
        }
    });
    client.user.setActivity('!drk pour l\'aide');
})

//login with the bot token
client.login(config.token);

//On message event, print the message
client.on('message', message => {

    if (message.content.startsWith(`${config.prefix}`)) console.log(message.author.username + " : " + message.content);

    if (message.content == `${config.prefix}`) {
       
        let msg = new Discord.MessageEmbed()
            .setAuthor('KindiLuv')
            .setTitle('Aide et commandes')
            .setDescription('Voici les commandes disponibles sur le bot pour le moment, il est prevu une extension pour league of legends et autres jeux si demande se fait. Pour tout bug, envoyez un PM a Kindiluv#1662.')
            .addFields(
                {name:'__!drk__', value:'Bon vous venez de l\'utiliser, je presume que vous savez ce que ca fait. Mais pour etre sur, ca affiche les differentes commande du bot'},
                {name:'__!drk r6__',value:'Cette commmande est un recap rapide des contraintes a suivre lors des parties.'},
                {name:'__!drk r6 rules__',value:'Ici ce sont l\'entierete des regles qui sont expliquees.'},
                {name:'__!drk r6 players <strings>__',value:'Precisez qui seront les joueurs a participer'},
                {name:'__!drk r6 go__', value:`Choisis un challenge aleatoire, il y en a actuellement : __**${rules.r6.length}**__`}
            );
        message.channel.send(msg);
    }

    if(message.content == `${config.prefix} r6`){
        let msg = new Discord.MessageEmbed()
            .setTitle('Regles du drinking game sur R6')
            .setAuthor('KindiLuv')
            .setDescription('Et vla les condition de boisson!')
            .setThumbnail('https://i.imgur.com/ZipQbMG.png')
            .addFields(
                {name:'Tu bois si tu...',value:'__**Chug:**__ \n te fais spawnpeek \n prends une armor \n retire une gu \n demande un doc-heal \n __**Big Chug:**__ \n Die au maestro \n te fais oryxed as monty \n die en spawnpickant\n __**shot:**__\n Die au sledge \n die aux ticks de clash \n TK', inline:true},
                {name:'Ta paire bois si tu...',value:'__**Chug:**__ \n spawnkill \n Die au kapkan trap \n __**Big Chug:**__ \n Kill au Maestro \n fais une INTERROGATION \n __**shot:**__ \n Kill au sledge \n kill au ticks de clash \n TK', inline:true}
            )
            .addField({name:'Tout le monde profites!',value:"on boit mais tous en coeur"})
            .addFields(
                {name:'Tout le monde bois si...',value:'__**Chug:**__ \n Hereford drop\n __**Big Chug:**__\n 3-0 ou 0-3\n __**shot:**__ \n l\'hotage meurs', inline:true},
                {name:'Les autres boivent si...',value:'__**Big Chug:**__ \n tu clutch 1v3+\n __**shot:**__ \n tu clutch 1v5', inline:true}
            )
        message.channel.send(msg);
    }

    if (message.content == `${config.prefix} r6 rules`) {
        

        let msg = new Discord.MessageEmbed()
            .setColor(0xff0000)
            .setTitle('Regles du drinking game sur R6')
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setAuthor('KindiLuv')
            .setDescription('Vous trouverez ici les regles du jeu a boire pour Rainbow Six, pour la version courte entrez uniquement !drk')
            .setThumbnail('https://i.imgur.com/ZipQbMG.png')
            .addFields(
                {name:'__Bases__', value:'Les règles sont simples : les erreurs les plus graves seront punies par la boisson. Les critères ou quantités peuvent varier en fonction du mode de jeu ou vous tombez. Pour profiter au maximum de l\'experience, jouez pour vous détendre ainsi que pour vous marrer avec les autres en vocal. Certaines règles pourraient inciter à TeamKill mais ce jeu se base aussi sur l\'honnetete, vous pouvez genre les gens mais pas volontairement vous suicider ou tuer un allié.'},
                {name:'__Jargon__', value:'Pour ce qui est des termes, trois seront proéminents : chug, big chug et shot. Les deux premiers se font à un alcool léger tel que de la bière et le dernier avec un alcool fort. Si vous ne prenez pas d\'alcool fort, remplacez par 3 gorgées de bière. Si vous ne prenez pas d\'alcool, trouver vous une règle qui permet de participer et profiter également.'},
                {name:'__Appairage__', value:'Au début de chaque partie et afin de ne pas trop être pénalise par son niveau (qui ne va pas s\'ameliorer avec le temps disons le) en plus d\'un challenge aléatoire, chaque joueur se retrouvera appaire à un autre et ce de façon cyclique. Certaines de vos actions se répercuteront sur vous et votre paire ou sur vous uniquement ou seulement sur votre paire.'}
            )
            .addFields(
                {name:'Tu bois',value:'__Chug:__ Tu te fais spawnpeek, prends une armor, retire une gu, te fais doc-heal \n __Big Chug:__ Die au maestro, tu te fais oryxed as monty, die en spawnpickant\n __shot:__ Die au sledge, ticks de clash, tu TK', inline:true},
                {name:'Ta paire bois',value:'__Chug:__ Tu spawnkill, Die au kapkan trap \n __Big Chug:__ Kill au Maestro, INTERROGATION \n __shot:__ Kill au sledge, au ticks de clash, TK', inline:true}
            )
            .addField({name:'Tout le mone profites!',value:"on boit mais tous en coeur"})
            .addFields(
                {name:'Tout le monde bois',value:'__Chug:__ Hereford drop\n __Big Chug:__ 3-0 ou 0-3\n __shot:__ l\'hotage meurs', inline:true},
                {name:'Les autres boivent',value:'__Big Chug:__ tu clutch 1v3+\n __shot:__ tu clutch 1v5', inline:true}
            )
        message.channel.send(msg);
    }

    if(message.content == `${config.prefix} r6 go`){
        if(orange == null && blue == null) message.channel.send("Faites les equipes d'abord");
        else{
            let val = Math.floor(Math.random() * Math.floor(19));
            let msg = new Discord.MessageEmbed()
                .setColor(0x00cc00)
                .setTitle(rules.r6[val].title)
                .setAuthor('KindiLuv')
                .setDescription(rules.r6[val].description);
            message.channel.send(msg);
        }
    }

    if (message.content.startsWith(`${config.prefix} r6 teams`)){
        blue= null; orange = null;
        const args = message.content.slice(config.prefix.length + 9 ).trim().split(' ');
        if(args.length == 5){
            blue = args;
            shuffle(blue);
            message.channel.send('**__Blue Team:__**' + blue);
        }
        else{
            if(args.length % 2 == 1){
                message.channel.send('uh oh, stinky, il faut un nombre pair ou 5 joueurs');
            }
            else{
                shuffle(args);
                const half = Math.ceil(args.length / 2);
                blue = args.splice(0, half); orange = args.splice(-half);
                message.channel.send("__**Teams Done!**__ \n __Blue:__ " + blue + "\n __Orange:__ " + orange);
            }
            message.channel.send('Votre paire est la personne a droite de votre nom (wrap)');
        }
    }


    // UTILS

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
})