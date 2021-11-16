//imports
import React, { useState, useRef } from 'react';
import RadioInput from './RadioInput';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//Styles
const StyledTaskContainer = styled.div`
  margin: 15px auto;
  width: 90%;
`;

const StyledTaskHeader = styled.div`
  display: flex;
  padding: 15px;
  box-shadow: 3px 3px 15px 0px rgba(0, 0, 0, 0.161);
  /* border-bottom: 2px solid #00adaa; */
`;
const StyledTaskIdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  background: linear-gradient(180deg, #00a9a7 0%, #00ba89 100%);
  color: white;
`;

const StyledTaskIdText = styled.p`
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`;

const StyledTaskTitle = styled.p`
  font-family: 'Manrope', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 25px;
  margin-left: 30px;

  color: #0e2a35;
`;

const StyledTaskStatusLine = styled.hr`
  margin: 0;
  width: 200px;
  background-color: rgba(0, 173, 170, 1);
  border: 2px solid #00adaa;
  /* height: 2px; */
`;

const StyledSingleTaskContainer = styled.div`
  display: flex;
  padding: 0 15px;
`;

const StyledSingleTaskIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 15px;
`;

const StyledSingleTaskTitle = styled.p`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
`;

const Task = ({ id, title, task }) => {
  //Hooks
  // local state
  const [display, setDisplay] = useState(false);

  //ref
  const statusRef = useRef();

  // custom functions
  const taskDisplayHandler = () => {
    setDisplay(!display);
    display
      ? (statusRef.current.style.width = '200px')
      : (statusRef.current.style.width = '300px');
  };
  return (
    <StyledTaskContainer>
      <StyledTaskHeader onClick={taskDisplayHandler}>
        <StyledTaskIdContainer>
          <StyledTaskIdText>{id}</StyledTaskIdText>
        </StyledTaskIdContainer>
        <div>
          <StyledTaskTitle>{title}</StyledTaskTitle>
        </div>
      </StyledTaskHeader>
      <StyledTaskStatusLine ref={statusRef} />
      {display ? (
        task.map((item) => (
          <StyledSingleTaskContainer key={item.id}>
            <StyledSingleTaskIconContainer>
              <RadioInput />
            </StyledSingleTaskIconContainer>
            <div>
              <StyledSingleTaskTitle>{item.text}</StyledSingleTaskTitle>
            </div>
          </StyledSingleTaskContainer>
        ))
      ) : (
        <></>
      )}
    </StyledTaskContainer>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  task: PropTypes.arrayOf(PropTypes.object),
};

export default Task;
