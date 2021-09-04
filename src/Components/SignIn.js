import { props } from 'bluebird'
import React, { useEffect } from 'react'
import { useState } from 'react'

const SignIn = (props) => {
    const [userName,setUserName] = useState('')
    const [password,setPassword] = useState('')
    const [change,setchange] = useState('')

    useEffect(()=>{
        console.log("Use effect")
    },[change])

    const enter = async () => {
        let test = await fetch('http://sjatest.herokuapp.com/auth', {
            method: 'POST',
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"userid":userName,"password":password}),
            })
    let test2 = await test.json();
    if(test2.error === 'Success')
            props.setSignedin(true)
            props.setloggedinUser(userName)
    }

    const changeUserName = (event) => {
        setUserName(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    return(<div className="signinouter">
        <div className="signin">
            <h2>Response Generator</h2>
            <input className="input" style={{height:'7%'}} type="text" placeholder="user name" onChange={changeUserName}/>
            <input className="input" style={{height:'7%'}} type="password" placeholder="password" onChange={changePassword}/>
            <button className='Button' style={{height:'10%'}} onClick={()=>enter()}>SignIn</button>
        </div>
        </div>)
}

export default SignIn;