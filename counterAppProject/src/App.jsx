import {useState} from 'react'

function App(){
  // let counter = 11
  const [counter, setCounter] = useState(11)

  const increaseCounter = () => {
    // counter = counter + 1
    if(counter < 30){
    setCounter(counter + 1)
    console.log(counter)
    }
  }

  const decreaseCounter = () => {
    // counter = counter - 1
    if(counter > 0){
    setCounter(counter - 1)
    console.log(counter)
    }
  }

  return(
    <>
        <h1>React Counter Project </h1>
        <br/>
        <p>Counter is : {counter}</p>
        <br />
        <button onClick={increaseCounter}> Increase Counter = {counter}</button>
        <br />
        <br />
        <button onClick={decreaseCounter}>Decrease Counter = {counter}</button>
        <br />
        Value of counter = {counter}
        <br />
        <p>This value is moved between 0 and 30</p>
    </>
  )
   
}
export default App