import React from 'react';

import classes from './BackDrop.css';

const backdrop = (prop) => (
    prop.show ? <div className='Backdrop' onClick={prop.clicked}></div> : null
);

export default backdrop;