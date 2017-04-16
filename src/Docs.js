import React from 'react';

const Docs = () => {
    return (
        <div style={{marginBottom: '50px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }}>
            <h1>Options</h1>
            <ul style={{maxWidth: "50%"}}>
                <li><b>height</b> and <b>width</b> for the component size. Optional, override style height and width properties.</li>
                <li><b>delay</b> could be boolean or miliseconds number. When true, the value is 500. Default is false. When set the component will wait to apply the big text effect. Useful for async content loading. </li>
            </ul>
            <h2>More options in JavaScript original lib</h2>
            <a href="https://brorlandi.github.io/big-text.js/" target="_blank">https://brorlandi.github.io/big-text.js/</a>
        </div>
    );
};

export default Docs;