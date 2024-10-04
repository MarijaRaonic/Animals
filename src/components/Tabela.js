import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { useState } from 'react';

const Tabela = ({animal, setAnimal, setEditMode}) => {

    const obrisi = (idx) => {
        let temp = [...animal]
        temp.splice(idx, 1)
        setAnimal([...temp])
    };

    const editMode = (idx) => {
        setEditMode({
            mode:true, 
            id: animal[idx].id,
            tip: animal[idx].tip,
            ime: animal[idx].ime,
            god: animal[idx].god,
            idx:idx
        })
    };


  return (
    <div>
        <table>
  <tr>
    <th>Id</th>
    <th>Tip</th>
    <th>Ime</th>
    <th>Godine</th>
    <th>Izmeni</th>
    <th>Izbrisi</th>
  </tr>
  
{animal.map((item, idx) => {
        return(
        <tr key={idx}>
    <td>{item.id}</td>
    <td>{item.tip}</td>
    <td>{item.ime}</td>
    <td>{item.god}</td>
    <td><button onClick={()=>editMode(idx)}>Edit</button></td>
    <td><button onClick={()=>obrisi(idx)}>X</button></td>
      </tr>      )
        })}

  </table>

    </div>
  )
};

export default Tabela;