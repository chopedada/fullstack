import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
  const { handleClick, text } = props
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Header = ({text}) => (
  <h1>{text}</h1>
)

const Statistic = (props) => {
  const { text, value } = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, bad, neutral, all, average, positive } = props

  if (all === 0) {
    return (
      <p>No feedback given!</p>
    )
  }

  return (
    <table>
      <Statistic text="good" value={good} />
      <Statistic text="bad" value={bad} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="all" value={all} />
      <Statistic text="average" value={average} />
      <Statistic text="positive" value={positive} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const calcAvg = () => ((good * 1 + neutral * 0 + bad * (-1)) / all)
  const calcPositive = () => (good * 100) / all

  return (
    <div>
      <Header text="Give Feedback!" />

      <Button handleClick={() => {
        setGood(good + 1)
        setAll(all + 1)
      }} text="good" /> <br />

      <Button handleClick={() => {
        setBad(bad + 1)
        setAll(all + 1)
      }} text="bad" /><br />

      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setAll(all + 1)
      }} text="neutral" /><br />

      <Header text="Statistics" />

      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        all={all}
        average={calcAvg()}
        positive={calcPositive()}
      />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root'))