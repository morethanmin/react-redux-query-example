import React from 'react'

type Props = {
  value: number
  onIncrease: () => void
  onDecrease: () => void
  onIncreaseBy: (diff: number) => void
}

function ContextCounter({
  value,
  onIncrease: handleIncrease,
  onDecrease: handleDecrease,
  onIncreaseBy: handleIncreaseBy,
}: Props) {
  return (
    <div>
      <h1>ContextCounter</h1>
      <h2>{value}</h2>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
    </div>
  )
}

export default ContextCounter
