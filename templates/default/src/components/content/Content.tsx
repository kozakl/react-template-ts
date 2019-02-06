import {PureComponent} from 'react';
import React from 'react';
import style from './Content.pcss';

export default class Content extends PureComponent<Props>
{
    onClick = ()=> {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <div className={style.logo}>
                    <img src={require('res/logo.svg')}/>
                </div>
                <button className={style.button} onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

interface Props {
    message:string;
}
