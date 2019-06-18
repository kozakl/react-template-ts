import {FunctionComponent} from 'react';
import React from 'react';
import style from './Content.pcss';

const Content:FunctionComponent<Props> = (props)=>
{
    function onClickChangeText() {
        props.changeText('CHANGED TEXT');
    }
    
    function onClickChangeColor() {
        props.changeColor('blue');
    }
    
    return (
        <div className={style.content}>
            <div className={style.logo}>
                <img src={require('res/logo.svg')}/>
            </div>
            <span className={style.text} style={{color: props.color}}>
                {props.text}
            </span>
            <div className={style.controls}>
                <button onClick={onClickChangeText}>CHANGE TEXT</button>
                <button onClick={onClickChangeColor}>CHANGE COLOR</button>
            </div>
        </div>
    );
};

interface Props {
    text:string;
    color:string;
    changeText:(text:string)=> void;
    changeColor:(color:string)=> void;
}

export default Content;
