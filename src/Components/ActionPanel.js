import React, { useEffect, useState } from 'react';
import DropDown from './DropDown';
import KeyInput from './KeyInput';
import KeyValue from './KeyValue';
import Message from './Message';

const ActionPanel = (props) => {
    const [tempKey,setTempKey] = useState('');
    const [tempValue,setTempValue] = useState('');
    const [status,setStatus] = useState('')

    useEffect(() => {
        if(status!=='')
            setTimeout(()=>{setStatus('')},3000)
      },[tempKey,tempValue,status]);

    const isNullOrWhitespace = ( input ) => {
        if (typeof input === 'undefined' || input == null) return true;
        return input.replace(/\s/g, '').length < 1;
    }

    const  addToList = async () => {
        
        if(props.dropSelect === 'response')
        {
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { "userid":props.loggedinUser,"key":tempKey,"value":tempValue,type:"intercom",product:'opsgenie'}
                let test = await fetch('http://sjatest.herokuapp.com/response', {
                        method: 'POST',
                        mode: 'cors', // no-cors, *cors, same-origin
                        cache: 'no-cache',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        })
                let test2 = await test.json();
                setStatus(test2.error)
            }
            else
            {
                console.log("Status Causing Render")
                setStatus('Key and value cannot empty')
            }

        }
        else{
            if(tempKey.length !== 0 && tempValue.length !== 0 && !isNullOrWhitespace(tempKey) && !isNullOrWhitespace(tempValue)){
                let data = { "userid":props.loggedinUser,key:tempKey,value:tempValue,product:'opsgenie'}
                let test = await fetch('http://sjatest.herokuapp.com/canned', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                        });
                let test2 = await test.json();
                setStatus(test2.error)
            }
            else{
                console.log("Status Causing Render")
                setStatus('Key and value cannot empty')
            }

        }

    }



    return(
    <div className="ActionPanel">
        {console.log("Printing build List:",props.cannedList)}
        <Message status={status} setStatus={setStatus}/>
        <DropDown setdropSelect={props.setdropSelect}/>
        <KeyInput setTempKey={setTempKey}/>
        <KeyValue setTempValue={setTempValue}/>
        <button className="Button" onClick={()=> addToList()}>Add Button</button>
    </div>
    )
}

export default ActionPanel;