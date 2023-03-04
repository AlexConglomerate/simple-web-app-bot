import React, {useCallback, useEffect} from 'react';
import {useTelegram} from "./useTelegram";
import Button from "./1_ui/button";

function Test() {
    const {onToggleButton, user, tg, queryId} = useTelegram()

    const showPopup = () => {
        tg.showPopup({
            title: 'Hello',
            message: 'How are you',
            buttons: [
                {id: 1, text: 'hello'},
                {id: 2, type: "cancel"},
                {id: 3, type: "destructive", text: 'hello123'}, // будет красная кнопка
            ],
        })
    }

    const showAlert = () => tg.showAlert('Привет!')

    const hapticFeedback = () => {
        tg.HapticFeedback.notificationOccurred('warning') // м.б. error, success, warning
    }

    const openLink = () => tg.openLink('https://core.telegram.org/bots')


    const close = () => tg.close()

    const showScanQrPopup = () => tg.showScanQrPopup("ScanQrPopupParams", true)


    useEffect(() => {
        tg.MainButton.setParams({text: 'Отправить данные'})
    }, [])


    const onSendData = useCallback(() => {
        const data = {
            country: 123,
            street: 123413413,
            subject: 4365354,
            queryId,
        }


        fetch('https://b8bf-46-251-198-159.eu.ngrok.io/web-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        tg.showAlert(queryId)

    }, [])
    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])


    return (
        <div className={'flex flex-col'}>
            <div>id: {user.id}</div>
            <div>first_name: {user.first_name}</div>
            <div>last_name: {user.last_name}</div>
            <div>username: {user.username}</div>


            <div className={'grid grid-cols-2 '}>
                <Button onClick={onToggleButton} name={'onToggleButton'}/>
                <Button onClick={close} name={'close'}/>
                <Button onClick={showPopup} name={'showPopup'}/>
                <Button onClick={openLink} name={'openLink'}/>
                <Button onClick={onToggleButton} name={'onToggleButton'}/>
                <Button onClick={hapticFeedback} name={'isVersionAtLeast'}/>
                <Button onClick={showAlert} name={'showAlert'}/>
                <Button onClick={showScanQrPopup} name={'showScanQrPopup'}/>
            </div>
        </div>
    );
}

export default Test;