import React from 'react';

function Copyright() {
    return (
        <h3 style={{color: 'white'}}>
            {'Copyright © '}
            <a href="https://www.github.com/liamhealy/">
                Liam Healy
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </h3>
    )
}

export default Copyright;