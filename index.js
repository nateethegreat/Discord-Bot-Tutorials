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
  client.on('guildMemberAdd', member => {
    let channel = client.channels.cache.get('channel-id')
    if(!channel) return;
    
    channel.send(`Welcome to the server ${member}! Please read the rules and remember to verify ;)`)
  })
  client.on('guildMemberRemove', member => {
    let channel = client.channels.cache.get('channel-id')
    if(!channel) return;
    
    channel.send(`Goodbye **${member.user.tag}**, we hope you come back soon...`)
  })

  client.login(process.env.TOKEN)
