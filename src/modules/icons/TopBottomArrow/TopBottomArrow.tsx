import React from 'react';
import classes from './TopBottomArrow.module.scss';

const TopBottomArrow: React.FC = () => ( 
  <div className={classes.arrowContainer}>
    <svg className={classes.arrowUp} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
      <path fill="#aaa" d="M12 8l6 6H6z"/>
    </svg>
    <svg className={classes.arrowDown} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
      <path fill="#aaa" d="M12 16l6-6H6z"/>
    </svg>
  </div>
);


export default TopBottomArrow;