import React from 'react';
import Task from '../components/Task';
import styled from 'styled-components';

const StyledTaskScreenHeader = styled.p`
  width: 90%;
  margin: 15px auto;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 87px;

  color: #000000;
`;

const TasksScreen = () => {
  return (
    <main>
      <StyledTaskScreenHeader>CCT Lab Process</StyledTaskScreenHeader>
      <Task
        id={1}
        title="Build test task"
        task={[
          { id: 0, text: 'Create repository' },
          {
            id: 1,
            text: 'Implement designs',
          },
          {
            id: 2,
            text: 'Implement functionality',
          },
        ]}
      />
      <Task
        id={2}
        title="Submit your test task"
        task={[
          { id: 0, text: 'Open email client' },
          {
            id: 1,
            text: 'Sent link with information to carrers@cornercasetech.com',
          },
        ]}
      />
      <Task
        id={3}
        title="Participate in tech interview"
        task={[
          { id: 0, text: 'Talk with HR' },
          { id: 1, text: 'Talk with Tech team' },
        ]}
      />
      <Task
        id={4}
        title="Receive answer"
        task={[
          { id: 0, text: 'Receive answer' },
          { id: 1, text: 'Start your IT career' },
        ]}
      />
    </main>
  );
};

export default TasksScreen;
