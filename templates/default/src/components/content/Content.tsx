import {FunctionComponent} from 'react';
import React from 'react';
import style from './Content.pcss';

const Content:FunctionComponent<Props> = (props)=>
{
    function onClick() {
        console.log(props.message);
    }
    
    return (
        <div className={style.content}>
            <div className={style.logo}>
                <img src={require('res/logo.svg')}/>
            </div>
            <button
                className={style.button}
                onClick={onClick}>
                Click
            </button>
        </div>
    );
};

interface Props {
    message:boolean;
}

export default Content;
