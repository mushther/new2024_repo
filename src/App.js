import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  const [FirstNumber, setFirstNumber] = useState("")
  const [SecondNumber, setSecondNumber] = useState(0)
  const [Opration, setOpration] = useState(0)
  const [Display, setDisplay] = useState("")
  
  const FirstSecondNumber = (digit) => {
    if(Opration.length >= 1 ){
      setSecondNumber(digit)
      setDisplay(digit)
    }
    else{
      setFirstNumber(digit)
      setDisplay(digit)
    }
  }
  const handleOpration = () =>{
    if(Opration === "+"){
      setCount((FirstNumber)+( SecondNumber))
    }else if(Opration === "-"){
      setCount((FirstNumber)-( SecondNumber))
    }else if(Opration === "*"){
      setCount((FirstNumber)*( SecondNumber))
    }else if(Opration === "/"){
      setCount((FirstNumber)/( SecondNumber))
    }
  }
  const handleDisplay = (sign) =>{
      setOpration(sign)
      setDisplay(sign)
  }

  const handleClear =() => {
    setFirstNumber(0)
    setSecondNumber(0)
    setOpration(0)
    setCount(0)
    setDisplay(0)
}
  return ( 
    <div className="App">
      <h1>{count === 0 ? Display : count}</h1>

      <div className='gridContainer'>
      <button onClick={()=>handleDisplay("-")}>-</button>
      <button onClick={()=>handleDisplay("+")}>+</button>
      <button onClick={()=>handleDisplay("*")}>x</button>
      <button onClick={()=>handleDisplay("/")}>/</button>
      <button className='clearbutton' onClick={()=>handleClear()}>C</button>
      <button onClick={()=>{FirstSecondNumber(1)}}>1</button>
      <button onClick={()=>{FirstSecondNumber(2)}}>2</button>
      <button onClick={()=>{FirstSecondNumber(3)}}>3</button>
      <button onClick={()=>{FirstSecondNumber(4)}}>4</button>
      <button onClick={()=>{FirstSecondNumber(5)}}>5</button>
      <button onClick={()=>{FirstSecondNumber(6)}}>6</button>
      <button onClick={()=>{FirstSecondNumber(7)}}>7</button>
      <button onClick={()=>{FirstSecondNumber(8)}}>8</button>
      <button onClick={()=>{FirstSecondNumber(9)}}>9</button>
      <button onClick={()=>{FirstSecondNumber(0)}}>0</button>
      <button className='qualtobutton' onClick={()=>{handleOpration()}}>=</button>
      </div>
    </div>
  );
}

export default App;
