import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineSearch } from 'react-icons/ai';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './HeaderPage.css';
import { useLocation } from 'react-router-dom';
const SearchComponent = (props) => {
  const { setShowSearch, searchText = '' } = props;
  const [search, setSearch] = useState(searchText ?? '');
  const location = useLocation();
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && search.length >= 1) {
      if (location.pathname === '/search') {
        window.location.replace(`/search?searchText=${search}`);
      } else {
        window.location.href = `/search?searchText=${search}`;
      }
    }
  };

  const handleBackPress = () => {
    if (searchText.length > 0) {
      window.history.go(-1);
    } else {
      setShowSearch(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        paddingLeft:'10px',
        paddingRight:'10px',
        height: '100px',
      }}
      className='shadow-style'
    >
      <IconButton onClick={handleBackPress}>
        <ArrowBackIcon />
      </IconButton>
      <div
        style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <TextField
          variant='outlined'
          placeholder='Search this site'
          type={'text'}
          name='search'
          value={search}
          onKeyDown={handleKeyPress}
          onChange={(text) => setSearch(text.target.value)}
          style={{
            backgroundColor: 'white',
            width: '70%',
            borderWidth: 0,
            shadowColor: '#171717',
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}
          on
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <IconButton onClick={() => setSearch('')}>
                  <AiOutlineSearch style={{ fontSize: 20 }} />
                </IconButton>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={() => setSearch('')}>
                  <CloseIcon style={{ fontSize: 20 }} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  );
};

export default SearchComponent;