import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <Link to='/admin/' >
                volunteers register list
            </Link>
            <br />
            <Link to='/admin/new-event' >
                add  event
            </Link>
        </div>
    );
};

export default Sidebar;