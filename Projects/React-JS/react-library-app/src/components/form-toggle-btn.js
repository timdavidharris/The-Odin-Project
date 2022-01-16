import React, { useState } from 'react';
import Form from './input-form';

const ToggleBtn = () => {
    const [show,setShow] = useState(false)
    return (
        <div>
            <button onClick={()=>setShow(!show)}>
                {show ? "Hide Add a Book Form" : "Show Add a Book Form"}
            </button>
            <div>
                {show ? <Form /> : null}
            </div>
        </div>
    )
}

export default ToggleBtn;