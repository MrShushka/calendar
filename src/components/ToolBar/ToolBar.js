import React from 'react';
import  './ToolBar.css';

const toolbar = ( props ) => (
    <header className = "Toolbar">
    <ul>
        <li>
            <a href = '/'>HOME</a>
        </li>
        <li>
            <a href = '/'>ABOUT US</a>
        </li>

    </ul>    
    </header>
);


export default toolbar;