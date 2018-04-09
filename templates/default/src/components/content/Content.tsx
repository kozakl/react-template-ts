import * as React from 'react';
import * as style from './Content.css';
/**
 * @author kozakluke@gmail.com
 */
export default class Content extends React.PureComponent<ContentProps>
{
    onClick = ()=>
    {
        console.log(this.props.message);
    };
    
    render()
    {
        return (
            <div className={style.content}>
                <button className={style.button} onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

interface ContentProps {
    message:string;
}
