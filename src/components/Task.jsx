import React from 'react';
import RadioInput from './RadioInput';

const Task = ({ id, title, task }) => {
  return (
    <div>
      <div>
        <h2>{id}</h2>
      </div>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <RadioInput />
      </div>
    </div>
  );
};

export default Task;
