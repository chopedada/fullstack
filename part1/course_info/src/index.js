
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1= 10
  const part2 = 'Using props to pass data'
  const exercise2= 7
  const part3 = 'State of a component'
  const exercise3= 14

  return (
    <div>
      <Header name={course} />
      <Content exercises = {{part1:part1, exercise1:exercise1, part2:part2,exercise2:exercise2,part3:part3,exercise3:exercise3}}/>
      <Total exercises = {{exercise1:exercise1,exercise2:exercise2,exercise3:exercise3}} />
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
      <Part part = {props.exercises.part1} exercise={props.exercises.exercise1} />
      <Part part = {props.exercises.part2} exercise={props.exercises.exercise2} />
      <Part part = {props.exercises.part3} exercise={props.exercises.exercise3} />
    </div>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}
const Total = (props) => {
  return(
  <p>Total number of exercises = {props.exercises.exercise1+props.exercises.exercise2+props.exercises.exercise3}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))