import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { increment, decrement, reset } from './features/counter/CounterSlice'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }
  const handleReset = () => {
    dispatch(reset())
  }

  return (
    <div className="counter-wrap">
      <div className="counter-card">
        <h1 className="counter-title">Redux Counter</h1>
        <p className="counter-value">Count: {count}</p>

        <div className="counter-actions">
          <button className="btn btn-inc" onClick={handleIncrement}>
            Increment
          </button>
          <button className="btn btn-dec" onClick={handleDecrement}>
            Decrement
          </button>
          <button className="btn btn-reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
