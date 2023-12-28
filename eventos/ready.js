module.exports = {
  name: 'ready',
  execute: async (client) => {
    console.log('Bot online')

    client?.application.commands.set(client.slash).then(() => {
      console.log('Slash commands carregados globalmente')
    })
  }
}