import React from 'react';
import Nav from './Nav';
import Main from './Main';

const AppScreen = (props) => {
return(
    <div>
        {console.log("Appscreen:",props)}
        <Nav loggedinUser={props.loggedinUser}/>
        <Main loggedinUser={props.loggedinUser}/>
    </div>
)
}

export default AppScreen;