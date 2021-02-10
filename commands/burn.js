const db = require('./../dbController');

module.exports = {
    name: 'burn',
    description: 'burn a user',
    async execute(msg, args){
       var rows = await db.getAllRows();
       let name = msg.toString().toLowerCase().split("!burn ")[1];
       if(rows.length){
            var insultIndex = Math.floor(Math.random() * rows.length);
            if(name){
                msg.channel.send(`Hey ${name} ${rows[insultIndex].name}`);
            } else {
                msg.channel.send(`You idiot ${msg.author} ${rows[insultIndex].name}. Maybe next time write someone's name to insult`);
            }
       } else {
           msg.channel.send(`There's no fucking insults you idiot...why don't you try adding some. Before you try to insult someone ${msg.author}`)
       }
    }
}