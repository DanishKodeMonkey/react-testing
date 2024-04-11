import React, { useState } from 'react';

import './App.css';

const App = () => {
    const [heading, setHeading] = useState('danish Kode Monkey');

    const clickHandler = () => {
        setHeading('Ravenous Ravens');
    };

    return (
        <>
            <button
                type='button'
                onClick={clickHandler}
            >
                Click me
            </button>
            <h1>{heading}</h1>
        </>
    );
};

export default App;
