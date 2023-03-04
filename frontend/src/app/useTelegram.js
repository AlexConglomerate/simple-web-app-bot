const tg = window.Telegram.WebApp;

export function useTelegram() {
    // показать/скрыть главную кнопку телеграмм
    const onToggleButton = () => tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show()

    return {
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
}
