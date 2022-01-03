const dbd = require("aoi.js")
const bot = new dbd.Bot({
  mobile: true,
  token: "",
  prefix: ['$getServerVar[prefix]', '<@$clientID>']
})

bot.onMessage({
  guildOnly: false
})
    
bot.status({
    text: "¡$serverCount Servidores!",
    type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
    time: 12
})
 
    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:Reproduciendo - **[$songInfo[title]\\]($songInfo[url])**}{color:08d6ff}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:La música a finalizado y he dejado el canal de voz}{color:fff708}{delete:10s};no]`
        })

    bot.variables(require('./variables/vars.js'))

    bot.loadCommands('./commands')

const keepAlive = require('./server');
const Monitor = require('ping-monitor');
 
keepAlive();
const monitor = new Monitor({
    website: '',
    title: 'UHC Omlet',
    interval: 2 // minutes
});
 
monitor.on('up', (res) => console.log(`${res.website} está encedido.`));
monitor.on('down', (res) => console.log(`${res.website} se ha caído - ${res.statusMessage}`));
monitor.on('stop', (website) => console.log(`${website} se ha parado.`) );
monitor.on('error', (error) => console.log(error));
