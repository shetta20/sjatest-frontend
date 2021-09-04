import React from 'react'

const KeyValue = (props) => {

    const changebuttonContent = (event) => {
        console.log("changebuttonContent Causing Render")
         props.setTempValue(event.target.value)
    }

    return (<div className="KeyValue">
            <label>Enter the value of the button:</label>
            <textarea className="textarea" cols="50" rows="30" id='value' type='text' placeholder="Enter the string to be saved. You'll also need to add spaces, tabs and line spacing" onChange={changebuttonContent} />
    </div>)
}

export default KeyValue;