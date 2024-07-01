import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/slices/counter';
import Footer from './components/Footer';


function App() {
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch()
  return (
    <>
   <div className='App'>

  <h1>Count is {count}</h1>
<button onClick={()=>dispatch(decrement())}>Decrement</button>
<p/>
<button onClick={()=>dispatch(increment())}>Increment</button>
<Footer/>
   </div>
   </>
  )
}

export default App
