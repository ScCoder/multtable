import React from 'react';
import s from './KeyBoard.module.css';

const KeyBoard = ({ onKeyClicked }) => {

    const onButtonCkicked = (e) => {
        const val = e.target.value;
        onKeyClicked(val);
    }

    const inputChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'del', '0', 'Ok']

    const InputElements = inputChars.map(ch => <button key={ch} className={s.button} onClick={onButtonCkicked} value={ch}>{ch}</button>)

    return (
        <React.Fragment>
            <div className = {s.wrapper}>
                {InputElements}
            </div>
        </React.Fragment>
    )
}
export default KeyBoard;