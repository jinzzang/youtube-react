import React, { useRef } from 'react';
import styles from './searchHeader.module.css';

const SearchHeader = props => {
  const inputRef = useRef();
  const handleSearch = () => {
    const search = inputRef.current.value;
    props.onSearch(search);
  };
  const handleClick = event => {
    handleSearch();
  };
  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="images\logo.png" alt="Img" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
      />
      <button className={styles.btn}>
        <img
          className={styles.imgBtn}
          src="images\search.png"
          alt="Search"
          onClick={handleClick}
        />
      </button>
    </header>
  );
};

export default SearchHeader;
