import {useEffect} from "react";
import {useTelegram} from "./app/useTelegram";
import SendData from "./app/sendData";
import Choice from "./app/miniApp/choice";
import Test from "./app/test";

function App() {
    const {tg} = useTelegram()

    useEffect(() => {
        return () => {
            tg.ready() // прекращает загрузку, и открывает страницу (необязательно)
            tg.expand() // открывает по весь экран
        };
    }, [])

    return (
        <div className={''}>
            {/*<SendData/>*/}
            {/*<Choice/>*/}
            <Test/>
        </div>
    )
}

export default App;
