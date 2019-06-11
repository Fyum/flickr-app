import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const StyledTags = styled.div`
  margin: 5px 0;
  padding: 10px;
  overflow: hidden;
`;

const DEFAULT_NUMBER_OF_DISPLAYED_TAGS = 3;

const Tags = ({
  title,
  items,
}) => {
  const [displayAll, setDisplayAll] = useState(false);
  const renderToggleButton = () =>
    <a href="" onClick={e => { setDisplayAll(!displayAll); e.preventDefault();} }>
      {
        displayAll
          ? 'Less'
          : 'More'
      }
    </a>

  return (
    <StyledTags>
      {
        items.length
          ? <i>{title}</i>
          : <i>No tags</i>
      }
      {
        items
        .filter((item, i) => displayAll ? true : i < DEFAULT_NUMBER_OF_DISPLAYED_TAGS)
        .map((item, i) => 
          <Button
            key={`button_tag_${item}_${i}`}
            size="small"
            style={{ margin: '5px'}} 
            variant="outlined" 
            color="primary">
            {item}
          </Button>
        
        )
      }
      {
        items.length > 3
          ? renderToggleButton()
          : ''
      }
      
    </StyledTags>
  )
}

export default Tags;