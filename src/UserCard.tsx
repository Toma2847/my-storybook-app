import React from 'react';

type UserCardProps = {
  name: string;
  email: string;
};

/**
 * componente UserCard che riceve via props un nome e una email
 * @param name = nome dell'utente
 * @param email = email dell'utente
 * @returns un card con il nome e l'email dell'utente
 */

export const UserCard: React.FC<UserCardProps> = ({ name, email }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem'}}>
      <h3>{name}</h3>
      <p>{email}</p>
      </div>
  );
};