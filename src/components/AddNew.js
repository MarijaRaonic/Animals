import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

const AddNew = ({animal, setAnimal}) => {

    const [tip, setTip] = useState('');
    const [ime, setIme] = useState('');
    const [god, setGod] = useState(null);

    const formSubmit = (event) => {
        event.preventDefault();

        setAnimal(preValue  => {
         return[...preValue,
        {
            id: uuidv4(),
            tip: tip,
            ime: ime,
            god: god 
        }]; 
        });
        
        setTip('');
        setIme('');
        setGod(null);
        event.target.tip.focus();
    }

  return (
    <div>
        <form onSubmit={formSubmit}>
            <label>Tip:</label>
            <input type='text'name='tip' value={tip} onChange={(event)=>setTip(event.target.value)}/>
            <label>Ime:</label>
            <input type='text' name='ime' value={ime} onChange={(event)=>setIme(event.target.value)}/>
            <label>Godine:</label>
            <input type='number' name='god' value={god} onChange={(event)=>setGod(event.target.value)}/>
            <input type='submit' value='Dodaj'/>
        </form>
    </div>
  )
}

export default AddNew