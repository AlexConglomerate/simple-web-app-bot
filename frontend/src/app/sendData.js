import React, {useState} from 'react';
import Button from "./1_ui/button";
import {useTelegram} from "./useTelegram";

function SendData(props) {
    const {tg} = useTelegram()
    const [state, setState] = useState();
    const handleClick = () => {
        tg.showAlert(state)
    }
    return (
        <div className={'flex flex-col m-5 gap-4 '}>
            <input
                className={'border-2 m-3 '}
                onChange={(e) => setState(e.target.value)}
                value={state}
            />
            <Button onClick={handleClick} name={'send'}/>
        </div>
    );
}

export default SendData;