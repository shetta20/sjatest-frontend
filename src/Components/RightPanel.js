import { deflateRaw } from 'pako';
import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard';

const RightPanel = (props) => {
    return(
        <div className="RightPanel">
        <button className="ButtonRight" onClick={()=>props.SetResponse("")}>Clear</button>
        <CopyToClipboard text={props.Response}>
                <button className="ButtonRight">Copy</button>
        </CopyToClipboard>
        </div>
    );
}

export default RightPanel;