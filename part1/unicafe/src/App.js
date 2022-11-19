import { useState } from 'react'

const StatisticLine = (props) => {
  const {text, value} = props
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Button = (props) => {
  const {onClick, text} = props
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = (props) => {
  // console.log(props)
  const {stats} = props

  const all = stats.good + stats.neutral + stats.bad
  const average = stats.score / all
  const positive = stats.good / all * 100 + ' %'

  if (all === 0){
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <table>
      <StatisticLine text='good' value={stats.good} />
      <StatisticLine text='neutral' value={stats.neutral} />
      <StatisticLine text='bad' value={stats.bad} />
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={average} />
      <StatisticLine text='positive' value={positive} />
    </table>
  )
}

const App = () => {
  // save clicks of each button to its own state
  // const [good, setGood] = useState(0)
  // const [neutral, setNeutral] = useState(0)
  // const [bad, setBad] = useState(0)
  const [stats, setStats] = useState({
    good: 0, neutral: 0, bad: 0, score: 0
  })

  const goodHandler = () => {
    // console.log('clicked')
    const newStats = {
      ...stats,
      good: stats.good + 1,
      // neutral: stats.neutral,
      // bad: stats.bad,
      score: stats.score + 1
    }
    setStats(newStats)
  }
  const neutralHandler = () => {
    // console.log('clicked')
    const newStats = {
      ...stats,
      // good: stats.good,
      neutral: stats.neutral + 1,
      // bad: stats.bad,
      // score: stats.score
    }
    setStats(newStats)
  }
  const badHandler = () => {
    // console.log('clicked')
    const newStats = {
      ...stats,
      // good: stats.good,
      // neutral: stats.neutral,
      bad: stats.bad + 1,
      score: stats.score - 1
    }
    setStats(newStats)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={goodHandler} text='good' />
      <Button onClick={neutralHandler} text='neutral' />
      <Button onClick={badHandler} text='bad' />
      <h1>statistics</h1>
      <Statistic stats={stats} />
    </div>
  )
}

export default App