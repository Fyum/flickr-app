import React, { useState } from 'react';
import styled from 'styled-components';

const StyledDescription = styled.div`
  margin: 5px 0;
  padding: 10px;
  overflow: hidden;
  span {
    display: block;
    margin: 0 0 5px 0;
  }
`;

const StyledText = styled.span`
  font-size: 14px;
`;

const DEFAULT_DISPLAYED_CHARACTERS = 100;

const Description = ({
  text,
}) => {
  const shouldShowToggleButton = text && text.length > DEFAULT_DISPLAYED_CHARACTERS;
  const [displayAll, setDisplayAll] = useState(!shouldShowToggleButton);


  const renderDescription = () => 
    <div>
      <span><i>Description</i></span>
      {
        displayAll
          ? <StyledText>{text}</StyledText>
          : <StyledText>{text.substring(0, DEFAULT_DISPLAYED_CHARACTERS)}...</StyledText>
      }
    </div>

  const renderNoDescription = () =>
      <div>
        <span><i>No description</i></span>
      </div>

  const renderToggleButton = () =>
    <a href="" onClick={e => {setDisplayAll(!displayAll); e.preventDefault();} }>
      {
        displayAll
          ? 'Less'
          : 'More'
      }
    </a>
  
  return (
    <StyledDescription>
      {
        text
          ? renderDescription()
          : renderNoDescription()
      }
      {
        shouldShowToggleButton
          ? renderToggleButton()
          : ''
      }
    </StyledDescription>
  )
}

export default Description;