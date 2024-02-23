'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '@/lib/features/counter/counterSlice'

export const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='border rounded'>
      <span className='flex justify-center -- p-4 text-bold' >{count}</span>
      <div className='flex'>
        <button
          className='btn btn-ghost'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className='btn btn-ghost'
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

// RootState type for useSelector
interface RootState {
  counter: {
    value: number
  }
}

export default Counter
