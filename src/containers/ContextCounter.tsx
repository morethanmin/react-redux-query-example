import React from 'react'
import ContextCounter from '../components/ContextCounter'
import { useCounterDispatch, useCounterState } from '../contexts/counter'

function ContextCounterContainer() {
  const value = useCounterState().count
  const dispatch = useCounterDispatch()

  // 각 액션들을 디스패치하는 함수들을 만들어줍니다
  const handleIncrease = () => {
    dispatch({ type: 'counter/INCREASE' })
  }

  const handleDecrease = () => {
    dispatch({ type: 'counter/DECREASE' })
  }

  const handleIncreaseBy = (diff: number) => {
    dispatch({ type: 'counter/INCREASE_BY', payload: diff })
  }
  return (
    <ContextCounter
      value={value}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onIncreaseBy={handleIncreaseBy}
    />
  )
}

export default ContextCounterContainer
