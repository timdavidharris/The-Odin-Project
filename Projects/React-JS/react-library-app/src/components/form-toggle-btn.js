import React, { Component, useState } from 'react';
import Form from './input-form';

const ToggleBtn = () => {
    const [show,setShow] = useState(false)
    return (
        <div>
            <button onClick={()=>setShow(!show)}>
                Show/Hide Form to Add a Book
            </button>
            <div>
                {show ? <Form /> : null}
            </div>
        </div>
    )
}

export default ToggleBtn;