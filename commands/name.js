const { builtinModules } = require("module");

module.exports = {
    name: 'name',
    description: 'name',
    execute(msg, args){
        msg.channel.send(`${msg.author.username}`);
    }
}