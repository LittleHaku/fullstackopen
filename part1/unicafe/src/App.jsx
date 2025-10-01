import { useState } from 'react'

// button component
const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const computeAverage = (good, neutral, bad) => {
    const total = good + neutral + bad
    return (good - bad)/total
  }

  const computePercentage = (good, neutral, bad) => {
    const total = good + neutral + bad
    return 100*good/total
  }

  return (
    <>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good"/>
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button onClick={() => setBad(bad + 1)} text="bad"/>

      <h1>statistics</h1>

      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>

      <p>all {good + neutral + bad}</p>

      <p>average {computeAverage(good, neutral, bad)}</p>

      <p>positive {computePercentage(good, neutral, bad)}%</p>
    </>
  )
}

export default App
