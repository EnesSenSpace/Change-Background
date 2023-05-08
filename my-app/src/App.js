import "./App.css";
import React, { useState } from "react";
function App() {
    const [changeColor, setChangeColor] = useState("#451322");

    let changeColorButton = () => {
        const randomColor = "#" + Math.random().toString(16).slice(2, 8);
        setChangeColor(randomColor);
        console.log(changeColor);
    };
    return (
        <div className='App'>
            <button
                className='changeColorButton'
                onClick={changeColorButton}
                style={{ backgroundColor: `${changeColor}` }}>
                Change Background
            </button>
        </div>
    );
}

export default App;
