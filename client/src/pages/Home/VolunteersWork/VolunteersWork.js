import React from 'react';
import InnerVolunteers from './InnerVolunteers';

const VolunteersWork = () => {
    const demoObj = [
        {
            name: 'cleaning',
        },
        {
            name: 'refuse shelter',
        },
        {
            name: 'charity',
        },
        {
            name: 'child support',
        }
    ]
    return (
        <div>
            {
                demoObj.map(items => <InnerVolunteers key={Math.random()} items={items} />)
            }
        </div>
    );
};

export default VolunteersWork;