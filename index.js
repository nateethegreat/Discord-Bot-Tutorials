const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`) // Indicates if the bot is online.
  
  client.user.setPresence({
    activity: {
      name: 'Fortnite', // Change this to anything you want!
      type: 'STREAMING', // The bot isn't actually streaming but you can use 'WATCHING', 'LISTENING', or 'PLAYING' to replace the current one.
      url: 'https://twitch.tv/jdsghakjdgskdgaksa', // Remove this if you change the type from streaming.
    }) // This determines the status of the bot.
  })
})
client.login("Your Token")
                      
      
