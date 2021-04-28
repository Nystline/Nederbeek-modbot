const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');


client.commands = new Discord.Collection();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.registry
    .reisterGroups([
        ['misc', 'misc commands'],
        ['moderation', 'moderation commands'],
    ])
    .registerDefualts()
    .registerCommandsIn(path.join(__dirname, 'cmds'))

})

client.login(config.token);