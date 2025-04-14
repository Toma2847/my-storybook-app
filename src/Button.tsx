import React from 'react';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

/**
 * componente bottone che riceve via props una label e una funzione onClick
 * @param label = testo del bottone
 * @param onClick = funzione da eseguire al click
 * @returns un bottone con la label passata come props
 */

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => 
    {
        return <button onClick={onClick}>{label}</button>;
    };