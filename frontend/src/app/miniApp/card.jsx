import React from 'react';

function Card({id, text, onClick}) {
    return (
        <div
            className={'bg-orange-100 border-2 border-amber-500 p-3 rounded-2xl cursor-pointer'}
            onClick={onClick}
        >
            {text}
        </div>
    );
}

export default Card;