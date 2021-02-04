import React from 'react';
import {Link} from 'react-router-dom';

function Navigation(){
    return <div className="nav_">
        <div className="nav_con">
            <div className="nav_icon">

            </div>
            
            <div className="nav_menu">
                <Link to="/" className="nav_menu_item">Home</Link>
                <Link to="/About" className="nav_menu_item">About</Link>
            </div>
            <div className="nav_left">

            </div>
        </div>
    </div>
}
export default Navigation;