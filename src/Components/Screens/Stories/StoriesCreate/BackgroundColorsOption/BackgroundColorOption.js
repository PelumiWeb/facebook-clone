import React from 'react';
import './BackgroundColorOption.css'

function BackgroundColorOption({backgroundColor, onClick}) {
    return (
        <div  style={{
            width: "1rem",
            height: "1rem",
            borderRadius: "50%",
            padding: 10,
            margin: 10,
            backgroundColor: backgroundColor,
            cursor: 'pointer'
        }}
        className="BackgroundColor"
        onClick={onClick}
        >
            
        </div>
    )
}

export default BackgroundColorOption
