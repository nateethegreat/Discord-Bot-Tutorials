  const Discord = require('discord.js')
  const client = new Discord.Client()
  const server = require('./server')
  const canvacord = require('canvacord')

  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
    
    client.user.setPresence({ 
      activity: {
        name: 'people learn to code',
        type: 'WATCHING',
        url: 'https://twitch.tv/hsujddhdjagsdsksagdahkdgakjdgskaskjgd',
      }
    })
    server(client)
  })
  client.on('guildMemberAdd', async (member, message) => {
    let channel = client.channels.cache.get('854853818688339968')
    if(!channel) return;
    
    const welcomeCard = new canvacord.Welcomer()
    .setUsername(member.user.tag)
    .setDiscriminator(member.user.discriminator)
    .setAvatar(member.user.displayAvatarURL({ format: "png", dynamic: false }))
    .setColor("title", "#00f7ff")
    .setColor("username-box", "#d9d4d8")
    .setColor("border", "#d9d4d8")
    .setColor("avatar", "#d9d4d8")
    .setBackground("https://images.unsplash.com/photo-1530053969600-caed2596d242?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80")
    .setMemberCount(member.guild.memberCount)
    
    let attachment = new Discord.MessageAttachment(await welcomeCard.build(), "welcome.png")
    channel.send(`Welcome to the server ${member}`, attachment)
  })
  
  client.on('guildMemberRemove', member => {
    let channel = client.channels.cache.get('854853906970837062')
    if(!channel) return;
    
    channel.send(`Goodbye **${member.user.tag}**, we hope you come back soon...`)
  })
  
  // Commands
  
  client.on('message', message => {
    let prefix = "t!" // Put whatever you want to be the prefix here.
    
    if(message.content.toLowerCase() === `${prefix}hello`) {
      const helloEmbed = new Discord.MessageEmbed()
      .setTitle('Hello!')
      .setColor("GREEN")
      .setDescription(`Hello ${message.author.username}! Nice to see you again!`)
      message.channel.send(helloEmbed)
      console.log(`${message.author.tag} just used the hello command.`)
    }
    
    if(message.content.toLowerCase() === `${prefix}goodbye`) {
      const goodbyeEmbed = new Discord.MessageEmbed()
      .setTitle('Goodbye')
      .setDescription(`See you later ${message.author.username}...`)
      .setColor("RED") // You can set this to anything you want, as long as its a supported color like "BLURPLE"
      message.channel.send(goodbyeEmbed)
      console.log(`${message.author.tag} just used the goodbye command.`)
    }
  })
  
  client.login(process.env.TOKEN)
