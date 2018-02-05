import * as React from 'react';
import * as style from './Content.css';
import {StatelessComponent} from 'react';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.PureComponent<Props, StatelessComponent>
{
    public static defaultProps:Partial<Props> = {
        color: 'red'
    };
    
    onClickChangeText = ()=>
    {
        this.props.changeText('CHANGED TEXT');
    };
    
    onClickChangeColor = ()=>
    {
        this.props.changeColor('blue');
    };
    
    render()
    {
        return (
            <div className={style.content}>
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
