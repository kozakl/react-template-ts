import * as React from 'react';
import * as style from './Page2.pcss';
import {Link} from 'react-router-dom';

export default function Page2()
{
    return (
        <div className={style.page2}>
            <h1 className={style.headline}>
                Page 2
            </h1>
            <Link to="/page1">
                Page1
            </Link>
        </div>
    );
}
