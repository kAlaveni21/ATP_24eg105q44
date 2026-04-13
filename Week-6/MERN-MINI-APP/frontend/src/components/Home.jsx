import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useCounterStore } from '../store/CounterStore';
import Test from './Test';

function Home() {
  //call useConuterStore hook to get state of zustand store
  
    let newCounter = useCounterStore((state)=>state.newCounter);
    let increamentCounter = useCounterStore((state)=>state.increamentCounter);

  const { counter, changeCounter } = useContext(counterContextObj);


  return (
    <div>
      <h1 className='text-4xl'>Counter: {counter}</h1>
      <button onClick={changeCounter} className='bg-amber-600 p-5'>Change</button>
      <h1 className='text-4xl'>Zustand Counter: {newCounter}</h1>
      <button onClick={increamentCounter} className='bg-amber-600 p-5'>Increament</button>
      <Test/>
    </div>
  )
}

export default Home