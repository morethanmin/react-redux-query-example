import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReduxCounter from '../components/ReduxCounter'
import { RootState } from '../modules'
import { decrease, increase, increaseBy } from '../modules/counter'

function ReduxCounterContainer() {
  const value = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  const handleIncrease = () => {
    dispatch(increase())
  }

  const handleDecrease = () => {
    dispatch(decrease())
  }

  const handleIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff))
  }
  return (
    <ReduxCounter
      value={value}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      onIncreaseBy={handleIncreaseBy}
    />
  )
}

export default ReduxCounterContainer
