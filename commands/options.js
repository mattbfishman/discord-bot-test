module.exports = {
    name: 'options',
    description: 'options',
    execute(msg, args){
        msg.channel.send(`
            =============== BURN BOOK COMMANDS ===============
            !add <option> : Add an insult to the burn book
            !delete <option> : Delete an insult from the burn book
            !read : See all insults currently in the burn book
            !burn <name> : Insult someone by name
        `);
    }
}