const {Client, GatewayIntentBits, Collection} = require('discord.js');
const fs = require('fs');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ]
})

client.slash = new Collection();

fs.readdirSync(`./eventos`).forEach(file => {
  const event = require(`./eventos/${file}`)
  if(event.once){
    client.once(event.name, (...args) => event.execute(client, ...args))
  }else{
    client.on(event.name, (...args) => event.execute(client, ...args))
  }
})

fs.readdirSync(`./comandos/`).forEach(sub => {
  fs.readdirSync(`./comandos/${sub}/`).forEach(file => {
    const command = require(`./comandos/${sub}/${file}`)
    client.slash.set(command.name, command)
  })
})

client.login(process.env.token).catch(e => {
  console.token('token incorreto')
})