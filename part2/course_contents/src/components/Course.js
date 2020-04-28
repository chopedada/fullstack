import React from 'react'

const Header = ({ course }) => {
    return (
        <h1>{course}</h1>
    )
}

const Total = ({ parts }) => {
    return (
        <p><strong>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises.</strong></p>
    )

}

const Part = ({ name, exercises }) => (
    <li>
        {name} {exercises}
    </li>
)

const Content = ({ parts }) => (
    <ul>
        {parts.map((part) => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
    </ul>
)

const Course = ({ course }) => (
    <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
        <hr />
    </div>
)

export default Course