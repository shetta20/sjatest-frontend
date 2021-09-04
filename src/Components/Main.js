import Left from './Left';
import Right from './Right';
import { useState } from 'react';

const Main = (props) => {    

    const [Response,SetResponse] = useState('');

    return(
    <div className='Main'>
        {console.log("Rendering Main:",props)}
        <Left Response={Response} SetResponse={SetResponse} loggedinUser={props.loggedinUser}/>
        <Right Response={Response} SetResponse={SetResponse}/>
    </div>
    );
}

export default Main;