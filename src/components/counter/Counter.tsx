import React, { useEffect, useState } from 'react';
import classes from './Counter.module.scss';

const Counter: React.VFC = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // useEffect(() => {
  //   console.log('はじめてのuseEffect');
  // }, [count1]);

  useEffect(() => {
    console.log('はじめてのuseEffect');
    const countUp = setInterval(() => {
      setCount1((prevCount) => prevCount + 1);
      console.log('countUp');
    }, 1000);
    return () => {
      clearInterval(countUp);
      console.log('unMount');
    };
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.buttonWrapper}>
        <span className={classes.buttonText}>カウント１</span>
        <button
          onClick={() => {
            setCount1((prevCount) => prevCount + 1);
            // setCount(count + 1);
          }}
        >
          {count1}
        </button>
      </div>
      <div className={classes.buttonWrapper}>
        <span className={classes.buttonText}>カウント２</span>
        <button
          onClick={() => {
            setCount2((prevCount) => prevCount + 1);
            // setCount(count + 1);
          }}
        >
          {count2}
        </button>
      </div>
    </div>
  );
};

export default Counter;
