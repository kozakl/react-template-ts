import {Link} from 'react-router-dom';
import React from 'react';
import style from './Page1.pcss';

export default function Page1()
{
    return (
        <div className={style.page1}>
            <h1 className={style.headline}>
                Page 1
            </h1>
            <Link to="/page2">
                Page2
            </Link>
        </div>
    );
}
