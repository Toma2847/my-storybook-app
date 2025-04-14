import React, { useState } from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
  mode?: 'standard' | 'wait' | 'disabled';
};

export const Button: React.FC<ButtonProps> = ({ label, onClick, mode = 'standard' }) => {
  const [isWaiting, setIsWaiting] = useState(false);

  const handleClick = () => {
    if (mode === 'disabled' || isWaiting) return;

    if (mode === 'wait') {
      setIsWaiting(true);
      setTimeout(() => {
        onClick();
        setIsWaiting(false);
      }, 5000);
    } else {
      onClick();
    }
  };

  const isDisabled = mode === 'disabled' || isWaiting;

  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      style={{
        border: 'none',
        padding: '0.5rem 1rem',
        cursor: isDisabled ? 'not-allowed' : 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      {isWaiting ? 'Attendere...' : label}
    </button>
  );
};
