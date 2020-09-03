import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { clearUsers, showClear } = githubContext;
  const { setAlert } = alertContext;
  const [inputValue, setInputValue] = useState('');

  const onChange = (e) => setInputValue(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '') {
      setAlert('Please eneter something', 'dark');
      return;
    }
    githubContext.searchUsers(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          value={inputValue}
          type='text'
          name='text'
          placeholder='Search users..'
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
