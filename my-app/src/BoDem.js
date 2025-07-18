import React, { useState } from 'react';
import './BoDem.css'
function ContentBoDem() {
    const [counter, setCounter] = useState(0);
    console.log(counter)
    const handleClick = () => {
        setCounter(prevState => prevState + 1)
    }   
    const handleReset = () => {
        setCounter(0);
    }
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Bộ Đếm Đơn Giản</h1>
            <div style= {{backgroundColor: "rgba(228,234,123,0.73)", color: 'red',paddingLeft:'10px', paddingRight:'10px',margin: '10px auto', width: '250px',height: '200px', borderRadius:'50px'}}>
                <h1>Bộ Đếm</h1>
                <h2 style={{backgroundColor: 'white', paddingTop:'10px', paddingBottom:'10px', borderRadius:'15px'}}>{counter}</h2>
                <button className='countButton' onClick={handleClick}>Increase</button>
                <button 
                    className='countButton'
                    onClick={handleReset}
                >Reset</button>
            </div>
        </div>
    )
}


export default ContentBoDem