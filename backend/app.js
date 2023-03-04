const {PORT} = require(`./config`)
const routes = require('./routes')
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {botStarted} = require('./telegram-bot');
const chalk = require('chalk')

const app = express();
app.use(express.json());
app.use(cors());
// app.use('/api', routes)

app.post('/web-data', async (req, res) => {
    const {qwe} = req.body;
    console.log(`qwe`, qwe)
    try {
        // await bot.answerWebAppQuery(queryId, {
        //     type: 'article',
        //     id: queryId,
        //     title: 'Успешная покупка',
        //     input_message_content: {
        //         message_text: ` Поздравляю с покупкой, вы приобрели товар на сумму ${totalPrice}, ${products.map(item => item.title).join(', ')}`
        //     }
        // })
        return res.status(200).json({});
    } catch (e) {
        return res.status(500).json({})
    }
})


const start = async () => {
    try {
        botStarted()
        const text = chalk.bgGreen(`             `) + chalk.green(` Сервер запущен на порту ${PORT} => `) + chalk.green(new Date().toLocaleTimeString())
        app.listen(PORT, () => console.log(text)) // начинаем слушать порт || запускаем сервер
    } catch (e) {
        console.log(`e`, e)
    }
}

start()