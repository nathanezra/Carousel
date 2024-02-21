import React, { useState } from 'react';
import getCountry from '../Constants/Countries'

const Checklist = (props) => {

    const {
        onCheckGroup,
        onCheckGrant,
        checkedGroups,
        taxes,
    } = props

    const [displayGroupUsers, setDisplayGroupUsers] = useState([])

    const onDisplay = (tax) => {
        setDisplayGroupUsers(prevState => ({
            ...prevState,
            [tax]: !prevState[tax] ?? true
        }))
    }

    return (
        <div className='checklistContainer'>
            {Object.entries(checkedGroups).map(([tax, group]) => (
                <div key={tax}>
                    <div className='row' onClick = {() => onDisplay(tax)} >
                        <img className='flag' src={getCountry(taxes, tax).img} />
                        <label className='taxLabel'>
                            <input
                                type="checkbox"
                                checked={group.checked}
                                onChange={() => onCheckGroup(tax)}
                            />
                            {tax}
                        </label>
                    </div>
                    {displayGroupUsers[tax] ? 
                            group.grants.map((grant, index) => (
                                <div className='row' key={`${grant.name}-${tax}-${index}`}>
                                    <div>
                                        <label className='grantLabel'>
                                            <input
                                                type="checkbox"
                                                checked={grant.checked && group.checked}
                                                onChange={() => onCheckGrant(tax, grant.name)}
                                            />
                                            {grant.name}
                                        </label>
                                    </div>
                                </div>
                            ))
                    : null}
                </div>
            ))}
        </div>
  );
};

export default Checklist;
