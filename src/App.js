
import './App.css';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Tabela from './components/Tabela';
import AddNew from './components/AddNew';
import Edit from './components/Edit';


const App = () => {

  const [editMode, setEditMode] = useState({mode:false, id:'',tip:'',ime:'',god:null});
  const [animal, setAnimal] = useState(
    [
      {
      id: uuidv4(),
      tip: 'pas',
      ime: 'Sofi',
      god: 1
    },
    {
      id: uuidv4(),
      tip: 'macka',
      ime: 'Kiti',
      god: 3
    },
    {
      id: uuidv4(),
      tip: 'ptica',
      ime: 'Zvrk',
      god: 5
    },
    {
      id: uuidv4(),
      tip: 'hrcak',
      ime: 'Tomi',
      god: 8
    }
    ]
    )




  return (
    <div className="App">
      {
        !editMode.mode ?
        <AddNew animal={animal} setAnimal={setAnimal}/>
        :
        <Edit animal={animal} setAnimal={setAnimal} editMode={editMode} setEditMode={setEditMode}/>
      }
      
      <Tabela animal={animal} setAnimal={setAnimal} setEditMode={setEditMode}/>
    </div>
  );
}

export default App;
