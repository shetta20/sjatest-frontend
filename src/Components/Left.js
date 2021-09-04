import React, { useEffect, useState } from 'react';
import ButtonHolder from './ButtonHolder';
import ActionPanel from './ActionPanel'
import VerticalNav from './VerticalNav';
import Canned from './Canned'
import NoteHolder from './NoteHolder';
import InternalEscalation from './InternalEscalation';

const Left = (props) => {
    const [tray,changeTray] = useState('buildScreen')
    const [cannedList,setcannedList] = useState([])
    const [dropSelect,setdropSelect] = useState('response')
    const [buildList,setbuildList] = useState([])


    return(
    <div className='Left'>
        {console.log("Rendering Left")}
        <VerticalNav changeTray={changeTray}/>
        {
        tray === "buildScreen"?<ButtonHolder buildList={buildList} setbuildList={setbuildList} Response={props.Response} SetResponse={props.SetResponse} tray={tray} loggedinUser={props.loggedinUser}/>:
        tray === "addButton"?<ActionPanel cannedList={cannedList} setcannedList={setcannedList} buildList={buildList} setbuildList={setbuildList} setdropSelect={setdropSelect} dropSelect={dropSelect} loggedinUser={props.loggedinUser}/>:
        tray === "canned"?<Canned cannedList={cannedList} setcannedList={setcannedList} Response={props.Response} SetResponse={props.SetResponse} dropSelect={dropSelect} tray={tray}/>:
        tray === "internalEscalation"?<InternalEscalation/>:tray === "noteHolder"?<NoteHolder />:"Nothing"} 
    </div>
    )
}

export default Left;