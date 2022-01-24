const mineflayer = require('mineflayer')
var options = {
  host: 'mstnw.net',
  username: 'DeliBlitz', 
  version: '1.12.2'
  }

var bot = mineflayer.createBot(options);

bindEvents(bot);

function bindEvents(bot) {

    bot.on('kick', function(reason) {
      console.log("Kicked");

      bot = mineflayer.createBot(options);
      bindEvents(bot);
    });
}
