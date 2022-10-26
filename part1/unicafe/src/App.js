import { useState } from 'react'

const Statics = (props) => {
  const sum_3 = (a,b,c) => (a+b+c)
  let g = props.good
  let n = props.neutral
  let b = props.bad
  let all = sum_3(g, n, b)
  if(all === 0){
    return(
      <p>No feedback given</p>
    )
  }

  let av = Number(all/3).toFixed(2)
  let pos = Math.round(g/all*10000)/100+'%'
  return(
    <div>
      <h1>statics</h1>
      <StatisticLine text='good' value={g}/>
      <StatisticLine text='neutral' value={n}/>
      <StatisticLine text='bad' value={b}/>
      <StatisticLine text='all' value={all} />
      <StatisticLine text='average' value={av} />
      <StatisticLine text='positive' value={pos} />
    </div>
  )
}

const StatisticLine = (props) => (<p>{props.text} {props.value}</p>)

const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='good' />
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral' />
      <Button handleClick={() => setBad(bad+1)} text='bad' />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App