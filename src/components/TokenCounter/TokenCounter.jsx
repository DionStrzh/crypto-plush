import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import './TokenCounter.scss'

export const TokenCounter = () => {
  const [count, setCount] = useState(1);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    count <= 0 ? setDisabled(true) : setDisabled(false);
  }, [count]);

  const decrementCount = () => {
    if (count <= 0) return;

    setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className='counter'>
      <div className='wrapper'>
        <button
          disabled={disabled}
          className={cn('button button--decrement', {
            'button--disabled': count === 0,
          })}
          onClick={() => decrementCount()}
        >
          -
        </button>
        <span style={{ color: 'white' }}>{count}</span>
        <button
          className='button button--increment'
          onClick={() => incrementCount()}
        >
          +
        </button>
      </div>
      <button className='mint'>
        <span>mint</span>
      </button>
    </div>
  );
};
