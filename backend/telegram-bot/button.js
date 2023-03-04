const {webAppUrl} = require(`../config`)

exports.linkButton = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Link to a web application', web_app: {url: webAppUrl}},],
        ]
    })
}


// ещё можно писать /setmenubutton отцу всех ботов

exports.button = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Button 1', callback_data: 1}, {text: 'Button 2', callback_data: 2}],
            [{text: 'Button 3', callback_data: 3}, {text: 'Button 4', callback_data: 4}]
        ]
    })
}

exports.down_button = {
    reply_markup: {
        keyboard: [
            [{text: 'Заполнить форму', web_app: {url: webAppUrl}}]
        ]
    }
}

exports.down_button_delete = {
    reply_markup: {remove_keyboard: true}
}
