import React, {useState} from 'react';
import Card from "./card";
import {useTelegram} from "../useTelegram";

function Choice(props) {
    const {tg} = useTelegram()
    const qwe = [
        {id: 1, isPersonSignedUp: true, text: 'Курсы по готовке и кулинарии.'},
        {id: 2, isPersonSignedUp: true, text: 'Курсы по фотографии и видеосъемке.'},
        {id: 3, isPersonSignedUp: false, text: 'Курсы по спорту и физической активности'},
        {id: 4, isPersonSignedUp: false, text: 'Онлайн-курсы по маркетингу и рекламе'},
        {id: 5, isPersonSignedUp: false, text: 'Курсы по фотографии и видеосъемке.'},
    ]
    const [state, setState] = useState(qwe);

    const classSection = ' p-5 '

    const handleClick = (id) => {
        tg.HapticFeedback.notificationOccurred('success')
        const _state = [...state]
        const index = _state.findIndex(item => item.id === id)
        _state[index].isPersonSignedUp = !_state[index].isPersonSignedUp
        setState(_state)
    }

    return (
        <div>
            <div className={'bg-green-100 ' + classSection}>
                Вы записаны на:
                {state.map(item => (
                    <div key={item.id}>
                        {item.isPersonSignedUp &&
                            <div className={'flex flex-col m-3 gap-3'}>
                                <Card text={item.text} onClick={() => handleClick(item.id)}/>
                            </div>
                        }
                    </div>
                ))}
            </div>

            <div className={'bg-yellow-100 ' + classSection}>
                Вы записаны на:
                {state.map(item => (
                    <div key={item.id}>
                        {!item.isPersonSignedUp &&
                            <div className={'flex flex-col m-3 gap-3'}>
                                <Card text={item.text} onClick={() => handleClick(item.id)}/>
                            </div>
                        }
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Choice;