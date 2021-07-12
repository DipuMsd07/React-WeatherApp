import React from 'react'

const InputField = (props) =>{
    return(
        <div className="inputData">
             <input
                type="search"
                className="inputField"
                value={props.search}
                onChange={props.input}
            />
        </div>
    )
}

export default InputField;