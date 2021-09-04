import React from 'react';

const Nav = (props) =>{
    return(
    <div className='Nav'>
        {console.log("Rendering Nav---")}
    <b>ResponseGenerator----</b>
    <b>{props.loggedinUser}</b>
    </div>);
}

export default Nav;
