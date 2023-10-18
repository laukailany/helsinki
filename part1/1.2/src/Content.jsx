import React from 'react';
import Part from './Part'

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} pName ={part.name} excer ={part.exercises}  >
        </Part>
      ))}
    </div>
  );
};

export default Content;