import * as React from 'react';
import * as style from './Content.pcss';
import {PureComponent, StatelessComponent} from 'react';

export default class Content extends PureComponent<Props, StatelessComponent>
{
    public static defaultProps:Partial<Props> = {
        color: 'red'
    };
    
    onClickChangeText = ()=> {
        this.props.changeText('CHANGED TEXT');
    };
    
    onClickChangeColor = ()=> {
        this.props.changeColor('blue');
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <div className={style.logo}>
                    <img src={require('res/logo.svg')}/>
                </div>
                <span className={style.text} style={{color: this.props.color}}>
                    {this.props.text}
                </span>
                <div className={style.controls}>
                    <button onClick={this.onClickChangeText}>CHANGE TEXT</button>
                    <button onClick={this.onClickChangeColor}>CHANGE COLOR</button>
                </div>
            </div>
        );
    }
}

interface Props {
    text:string;
    color:string;
    changeText:(text:string)=> void;
    changeColor:(color:string)=> void;
}
