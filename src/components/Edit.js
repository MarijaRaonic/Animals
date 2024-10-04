import React from 'react';
import { useState, useEffect } from 'react';

const Edit = ({animal, setAnimal, editMode, setEditMode}) => {

    const [tip, setTip] = useState('');
    const [ime, setIme] = useState('');
    const [god, setGod] = useState('');

    useEffect(()=>{
        setTip(editMode.tip);
        setIme(editMode.ime);
        setGod(editMode.god);
    },[]);

    const edit = () => {

        let priv = [...animal];
        priv.forEach((item, idx) => {
           if (editMode.id === item.id)
           { 
            priv[idx].tip = tip;
            priv[idx].ime = ime;
            priv[idx].god = god;
        }
    }); 

        setAnimal([...priv]);
        exitEditMode();
        }
        

    const exitEditMode = () => {
        setEditMode({mode:false, id:'',tip:'',ime:'',god:null});
        setTip('');
        setIme('');
        setGod('');
    }
  
    return (
    <div>
            <label>Tip:</label>
            <input type='text'name='tip' value={tip} onChange={(event)=>setTip(event.target.value)}/>
            <label>Ime:</label>
            <input type='text' name='ime' value={ime} onChange={(event)=>setIme(event.target.value)}/>
            <label>Godine:</label>
            <input type='number' name='god' value={god} onChange={(event)=>setGod(event.target.value)}/>
            <button onClick={edit}>Izmeni</button>
            <button onClick={exitEditMode}>X</button>
        
    </div>
  )
}

export default Edit