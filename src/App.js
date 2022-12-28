import { useState } from 'react';
import './App.css';
import Timer from './List';
import Parentheses from './Parentheses';

function App() {
  const [list,setList] = useState([]);
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  function addItem(){
    const time = getRandomArbitrary(10,30)
    const newItem = {
      id: Math.random() * 10000,
      timer : time
    }
    setList((val) => [...val,newItem])
  }
  function deleteItem(index){
    setList(list.filter((item,indexLocal) => indexLocal !== index ))
  }
 
  return (
    <div className="App">
      <Parentheses/>
      <div>
      <p>Задание №2</p>
      <button className='button' onClick={addItem}>Добавить</button>
      
      <ul>
        {list.map((item,index) => (
          <Timer key={item.id} time={item.timer} deleteItems={deleteItem} index={index}/>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
 