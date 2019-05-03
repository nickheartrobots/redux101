import React from 'react';

import { Link } from 'react-router-dom' 

function LeftNav(){
    return(
        <div>
            Nav Bar
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>
                    Multi Step Form
                    <ul>
                        <li><Link to="/multistep/1">Step 1</Link></li>
                        <li><Link to="/multistep/2">Step 2</Link></li>
                        <li><Link to="/multistep/3">Step 3</Link></li>
                        <li><Link to="/multistep/summary">Summary</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default LeftNav;