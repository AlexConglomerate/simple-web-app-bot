import React from 'react';

function Button({name, onClick}) {
    return (
        <div className={'cursor-pointer rounded-2xl bg-blue-300 m-3 px-4 py-2 hover:bg-blue-400 '}
             onClick={onClick}
        >
            {name}
        </div>
    );
}

export default Button;