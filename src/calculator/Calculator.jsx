import React, { useEffect, useState } from 'react'
import './Calculator.css'


const Calculator = () => {

  const[result, setResult]=useState('');

  const clickHandler=(event)=>{
    setResult(result.concat(event.target.value));   
  }

  const clearDisplay=()=>{
    setResult("");
  }

  const Calculate=()=>{
    const sanitizedExpression = result.replace(/(^|[^\d.])0+(\d+)/g, '$1$2');
    setResult(eval(sanitizedExpression).toString());
  }

  const backSpace = () => {
    setResult((result) => result.slice(0, -1));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key;
 
      
      if (/^[0-9+\-*/=]$/.test(keyPressed)) {
        
        setResult((prevDisplay) => prevDisplay + keyPressed);
      } else if (keyPressed === 'Escape') {
        
        
        setResult('');
      } else if (keyPressed === 'Enter') {
        
        try {
          const sanitizedExpression = result.replace(/(^|[^\d.])0+(\d+)/g, '$1$2');
          setResult(eval(sanitizedExpression).toString());
        } catch (error) {
          setResult('Error');
        }
      }
      else if (keyPressed === 'Backspace') { 
        setResult((prevDisplay) => prevDisplay.slice(0, -1));
      
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [result]);


    return (
      <>
    <div className='container-area'>
    <div className='container'>
        <input type="text" placeholder="0" className='answer' value={result}/>          
        <input type="button" className='btn' value="clr" onClick={clearDisplay}/>
        <input type="button" className='btn' value="0" onClick={clickHandler}/>
        <input type="button" className='btn' value="back" onClick={backSpace}/>
        <input type="button" className='btn' value="/" onClick={clickHandler}/>
        <input type="button" className='btn' value="7" onClick={clickHandler}/>
        <input type="button" className='btn' value="8" onClick={clickHandler}/>
        <input type="button" className='btn' value="9" onClick={clickHandler}/>
        <input type="button" className='btn' value="*" onClick={clickHandler}/>
        <input type="button" className='btn' value="4" onClick={clickHandler}/>
        <input type="button" className='btn' value="5" onClick={clickHandler}/>
        <input type="button" className='btn' value="6" onClick={clickHandler}/>
        <input type="button" className='btn' value="-" onClick={clickHandler}/>
        <input type="button" className='btn' value="1" onClick={clickHandler}/>
        <input type="button" className='btn' value="2" onClick={clickHandler}/>
        <input type="button" className='btn' value="3" onClick={clickHandler}/>
        <input type="button" className='btn' value="+" onClick={clickHandler}/>
        <input type="button" className='btn' value="00" onClick={clickHandler}/>
        <input type="button" className='btn' value="." onClick={clickHandler}/>
        <input type="button" className='btn1' value="Enter" onClick={Calculate}/>
    </div>
    </div>
    </>
  )
}


export default Calculator
