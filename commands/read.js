const db = require('./../dbController');

module.exports = {
    name: 'read',
    description: 'read list of insults',
    async execute(msg, args){
       var rows = await db.getAllRows();
       if(rows.length){
          rows.forEach(row => 
            msg.channel.send(`${row.name}`)
          );
       } else {
           msg.channel.send(`There's no fucking insults you idiot...why don't you try adding some.`)
       }
    }
}