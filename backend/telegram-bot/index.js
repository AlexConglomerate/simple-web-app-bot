const TelegramBot = require("node-telegram-bot-api");
const dotenv = require('dotenv');
const {linkButton} = require('./button');
dotenv.config();

exports.botStarted = () => {
    const bot = new TelegramBot(process.env.BOT_TOKEN, {polling: true});
    console.log(`Telegram bot is started`)

    bot.on('message', async (msg) => {
        try {
            const chatId = msg.chat.id;
            const message = msg.text;
            await bot.sendMessage(chatId, "message", linkButton);

        } catch (error) {
            console.log(`error`, error)
        }
    });
}