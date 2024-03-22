import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from '../counter';
import Team from '../Team';
import Users from '../Users';
import friends from '../friends';
import Friends from '../friends';

function App() {

  function handleClick(){
    alert('Button clicked');
  }

  function buttonClick(){
    alert('button clicked')
  }

 
  // const AddToFive = (num) =>{
  //   alert(num + 10);
  // }

  const AddToFive = (num) => {
    alert(num+4);
  }



  return (
    <>
      <h3>React core concept 2</h3>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>


      <button onClick={handleClick}>Click me</button>
      <button onClick={buttonClick}>Click 2</button>
      <button onClick={ () => AddToFive(3)}> Click 3</button>
     
    </>
  )

}
 

export default App
