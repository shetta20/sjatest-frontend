import React from 'react';
import Editor from './Editor';
import RightPanel from './RightPanel';

const Right = (props) =>{

    return(
    <div className='Right'>
        {console.log("Rendering Right")}
        <Editor Response={props.Response} SetResponse={props.SetResponse}/>
        <RightPanel Response={props.Response} SetResponse={props.SetResponse}/>
    </div>
    );
}

export default Right;
