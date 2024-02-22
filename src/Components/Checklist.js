import React, { useState } from 'react';
import getCountry from '../Constants/Countries'
import arrowUp from '../Images/icons8-arrow-up-50.png'
import arrowDown from '../Images/icons8-arrow-down-50.png'

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
            {Object.entries(checkedGroups).map(([tax, group], i) => (
                <div key={tax}>
                    <div className='row' onClick = {() => onDisplay(tax)} >
                        <img className='flag' src={getCountry(taxes, tax).img} />
                        <label className='taxLabel'>
                            <input
                                id={`$${tax}-${i}`}
                                type="checkbox"
                                checked={group.checked}
                                onChange={() => onCheckGroup(tax)}
                            />
                            <label for={`$${tax}-${i}`}></label>
                            {tax}
                        </label>
                        <img className='arrowUpDown' src={displayGroupUsers[tax] ? arrowUp : arrowDown} />
                    </div>
                    {displayGroupUsers[tax] ? 
                            group.grants.map((grant, index) => (
                                <div className='row' key={`${grant.name}-${tax}-${index}`}>
                                    <div>
                                        <label className='grantLabel'>
                                            <input
                                                id={`${grant.name}-${tax}-${index}`}
                                                type="checkbox"
                                                checked={grant.checked && group.checked}
                                                onChange={() => onCheckGrant(tax, grant.name)}
                                            />
                                            <label for={`${grant.name}-${tax}-${index}`}></label>
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
