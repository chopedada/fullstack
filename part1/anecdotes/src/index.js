import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = ({ onClick, value }) => (
  <button onClick={onClick}>
    {value}
  </button>
)

const Heading = ({value}) => (<h1>{value}</h1>)


const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [voteArray, setVoteArray] = useState(Array(6).fill(0))
  const maxVotes = Math.max(...voteArray)

  const nextAnecdote = () => {
    setSelected(Math.floor(Math.random() * 6))
  }

  const addVote = () => {
    const newVoteArray = [...voteArray]
    newVoteArray[selected] += 1

    setVoteArray(newVoteArray)
  }

  return (
    <div>
      <Heading value="Anecdote of the day" />
      
      <p>{anecdotes[selected]} <br />
      has {voteArray[selected]} votes</p>

      <Button onClick={nextAnecdote} value="Next Anecdote" />
      <Button onClick={addVote} value="Vote" />

      <Heading value="Most popular anecdote" />

      <p>{anecdotes[voteArray.indexOf(maxVotes)]}</p
      >
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)