import React, {useState} from 'react'

function InputValue() {

    const [inputValue, setInputValue] = useState("Pedro");
   
    let changeValue = (event) =>{
        const newValue = event.target.value;
        setInputValue(newValue)
    };

  return (
    <div>
        <input type="text" name="" id="" onChange={changeValue} />
        {inputValue}

    </div>
  )
}

export default InputValue