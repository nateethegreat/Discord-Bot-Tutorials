const Discord = require('discord.js')
const client = new Discord.Client()
const server = require('./server')

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
  
  client.user.setPresence({ 
    activity: {
      name: 'Fortnite',
      type: 'STREAMING',
      url: 'https://twitch.tv/hsujddhdjagsdsksagdahkdgakjdgskaskjgd',
    }
  })
  server(client)
})
client.login(process.env.TOKEN)
