const Commando = require('discord.js-commando')

module.exports = class SetVerificationCommand extends Commando.command {
    constructor(client) {
        super(client, {
            name: 'setverification',
            group: 'misc',
            memberName: 'setverification',
            description: 'SEt the verification channel for the Discord',
            userpermission: ['ADMINISTRATOR'],
            argsType: 'Multiple'
        })
    }

    async run(message, args){
        const second = 3

        if (args.length !== 2){
            message
            .reply('You must provide an emoij to react with and a role ID')
            .then(message => {
                message.delete({
                    timeout: 1000 * seconds
                })
            })

            message.delete()
            return
        }
        const { guild, channel } = message

        let emoij = args[0]
        console.log(emoij)

        const roleID = args[1]
    }
}