    import React, { useContext } from 'react';
    import { AppContext } from '../context/AppContext';

    const Location = () => {
    const {dispatch } = useContext(AppContext);

        const changeLocation = (val)=>{
                dispatch({
                    type: 'CHG_LOCATION',
                    payload: val,
                })
        }
        
    return (
            <div className='alert alert-secondary'>
                <label htmlFor="Location" className='bg-green' style={{ marginRight: '1rem' }}>Currency (£ Pound)</label>
                <select name="Location" id="Location" onChange={event=>changeLocation(event.target.value)} style={{ padding: '0.5rem', fontSize: '1rem' }}>
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Ruppee</option>
                </select>  
            </div>
        );
    };

    export default Location;