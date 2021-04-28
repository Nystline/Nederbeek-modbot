const discord = require('discord.js');
const client = new Discord.Client();
const [ TOKEN, PREFIX ] = require('config.json');


client.commands = new Discord.Collection();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})

const commandFiles = fs.readdirSync('./commands').filter(file => file.endWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
        if (!file.endWith('.js')) return;
        const evt = require(`./events${file}`);
        let evtName = file.split('.')[0];
        console.log(`Loaded event '${evtName}'`);
        client.on(evtName, evt.bind(null, client));

    });
});

client.on('message', msg => {
    if (msg.content === 'hello') {
        msg.reply(`Hello ${client.user.tag}`);
    }
});



client.login('TOKEN');