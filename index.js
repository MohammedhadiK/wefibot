const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_API_TOKEN' with your BotFather token
const bot = new TelegramBot('7061621603:AAHtdB5ZLFeZlGyWENtux0u3Z2qkIF0t8ps', {polling: true});

// Start command
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Hello! I am your bot Hadi. How can I assist you?');
});

// Echo all text messages
bot.on('message', (msg) => {
  if (!msg.text.startsWith('/')) {
    bot.sendMessage(msg.chat.id, msg.text);
  }
});
