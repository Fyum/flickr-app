import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';


const StyledForm = styled.form`
  margin: 50px 0 100px 0;
  padding: 0 10px;
`;

const SearchBar = ({
  searchText,
  onTextFieldChange,
  onClickSearch,
}) => {

  const [errorMessage, setErrorMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!searchText){
      setErrorMessage('Required');
      return;
    }

    setErrorMessage('');
    onClickSearch();
  }
  
  return (
    <StyledForm className="row" onSubmit={handleSubmit}>
      <div className="col-md-8">
        <TextField
          label="Search image"
          value={searchText}
          onChange={(e) => onTextFieldChange(e.target.value)}
          margin="normal"
          fullWidth
        />
        {
          errorMessage
            ? <span style={{ color: 'red' }}>{errorMessage}</span>
            : ''
        }
      </div>
      <div className="col-md-4 mt-4">
        <Button 
          fullWidth
          variant="contained"
          color="primary"
          type="submit">
          Search
        </Button>
      </div>
    </StyledForm>
  )
}

export default SearchBar;