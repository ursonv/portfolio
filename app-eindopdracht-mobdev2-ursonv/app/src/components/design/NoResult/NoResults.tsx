import React from 'react';
import style from './NoResults.module.css'; 

const NoResults: React.FC = () => {
  return (
    <div className={style.noResultsContainer}>
      <p>No results found</p>
    </div>
  );
};

export default NoResults;
