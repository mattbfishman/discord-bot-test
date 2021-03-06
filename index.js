require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands/index');
const TOKEN = process.env.TOKEN;
const db = require('./dbController');

db.initDB();

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  var command = args.shift().toLowerCase();
  if(command.indexOf('!') > -1){
    command = command.replace("!", "");
    if (!bot.commands.has(command)) return;

    try {
      bot.commands.get(command).execute(msg, args);
    } catch (error) {
      console.error(error);
      msg.reply('there was an error trying to execute that command!');
    }
  }
});