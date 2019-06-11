import React from 'react';
import styled from 'styled-components';

import Tags from './Tags';
import Description from './Description';

const StyledContainer = styled.div`
  width: 100%;
  margin: 10px;
  border: 1px solid #a6acb1;
  border-radius: 5px;
  box-shadow: 1px 0px 9px 0px #adbbc3;
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
`;

const StyledLinkTitle = styled.div`
  margin: 5px 0;
  padding: 0 10px;
  overflow: hidden;
  font-size: 13px;
  span {
    display: block;
  }
`;

const Card = ({
  item,
}) => {

  const {
    title,
    userName,
    description,
    tags,
    userLink,
    imageLink,
    imageUrl,
  } = item;

  return (
    <StyledContainer>
      <StyledImageContainer>
        <StyledImage src={imageUrl} alt={title}/>
      </StyledImageContainer>
      <StyledLinkTitle>
        <span><a href={imageLink} target="_blank" rel="noopener noreferrer">{title}</a></span>
        by
        <span><a href={userLink} target="_blank" rel="noopener noreferrer">{userName}</a></span>
      </StyledLinkTitle>

      <Description
        text={description}
      />
      
      <Tags
        title="Tags"
        items={tags.split(' ').filter(Boolean)}
      />
    </StyledContainer>

  )
}

export default Card;