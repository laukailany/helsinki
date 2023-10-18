import React from 'react';
import Header from './HEADER';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <p>{course.parts[0].name} {course.parts[0].exercises} <br></br> {course.parts[1].name} {course.parts[1].exercises} <br></br> {course.parts[2].name} {course.parts[2].exercises} </p>
    </div>
  )
}

export default App;