module.exports = {
  name: 'ping',
  description: 'ms do bot',
  execute: async (client, interaction) => {
    interaction.reply(`${client.ws.ping} ms`)
  }
}
  