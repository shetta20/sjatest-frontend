import React from 'react'
import { useRef, useState } from 'react';

const Editor = (props) => {

    const textAreaRef = useRef(null);
    const [copySuccess, setCopySuccess] = useState('');

    const handleChange = (event) => {
        props.SetResponse(event.target.value);
    }

    const copyToClipboard = (e) => {
        textAreaRef.current.select();
        document.execCommand('copy');
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();
        setCopySuccess('Copied!');
      };

// return(<textarea className='Response' defaultValue={props.Response} value={props.Response} onChange={handleChange}/>);
return(<div><textarea ref={textAreaRef} className='Response' value={props.Response} onChange={handleChange}/><button onClick={copyToClipboard}>Click</button></div> );
}

export default Editor;
