const Discord = require('discord.js');

module.exports = {
  name: 'interactionCreate',
  execute: async (client, interaction) => {
    if(interaction.type == Discord.InteractionType.ApplicationCommand){
      const datacommand = client.slash.get(interaction.commandName)
      if(!datacommand){
        interaction.reply('!!!!')
      }else{
        datacommand.execute(client, interaction)
      }
    }
  }
}