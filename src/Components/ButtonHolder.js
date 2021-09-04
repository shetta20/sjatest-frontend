import React, { useState } from 'react';
import Button from './Button';
import { useEffect } from 'react';

const ButtonHolder = (props) => {

    const [buttonList,setButtonList] = useState(props.buildList)
    const [Loading,setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://sjatest.herokuapp.com/response?userid=${props.loggedinUser}`).then(data => data.json()).then(data => {
            props.setbuildList(data);
            setLoading(false)
        })
      },[props.buildList]);

    return(
    <div className='ButtonHolder'>
        {console.log("Rendering Button Holder",props.buildList)}
        {Loading === true?<div><p className="loading">Your resposes are Loading....</p></div>:
        props.buildList.length !== 0?
        props.buildList.map((item,key) => 
            {
                return(<Button 
                            Response={props.Response} 
                            SetResponse={props.SetResponse} 
                            buttonName={item.key} 
                            buttonValue={item.value} 
                            key={key}
                            tray={props.tray}
                            />
                            )
            }
        ):<div><p className="info">Looks like there are no responses, Click on the 'Add Button' option on the vertical nav bar to add a response</p></div>}   
        
    </div>
    )
}

export default ButtonHolder;