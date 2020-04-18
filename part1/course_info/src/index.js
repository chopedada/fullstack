
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name={course} />
      <Content contents = {parts}/>
      <Total exercises = {parts} />
    </div>
  )
}

const Header = (props) => {
  return(
  <h1>{props.name}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part info = {props.contents[0]} />
      <Part info = {props.contents[1]} />
      <Part info = {props.contents[2]} />
    </div>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.info.name} {props.info.exercises}
    </p>
  )
}
const Total = (props) => {
  console.log(props)
  return(
  <p>Total number of exercises = {props.exercises[0].exercises + props.exercises[1].exercises + props.exercises[2].exercises}</p>)
}

ReactDOM.render(<App />, document.getElementById('root'))