import React from 'react';
import Header from './HEADER';
import Content from './Content';
import Total from './Total';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <p>{part1.name} <br></br> {part2.name} <br></br> {part3.name}</p>
    </div>
  )
}

export default App;