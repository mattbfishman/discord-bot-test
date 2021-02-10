const db = require('./../dbController');

module.exports = {
    name: 'add',
    description: 'add insult',
    execute(msg, args){
        let insult = msg.toString().toLowerCase().split("!add ")[1];
        if(insult.length){
            db.insertDB(insult);
            msg.channel.send(`I've added "${insult}" to my burn book`);
        } else {
            msg.channel.send(`Stupid....add an insult you nugget.`);
        }
    }
}