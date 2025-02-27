import React from 'react';
import UserItems from './UserItems'; // Ensure this is the correct component
import './UserList.css';
import Card from '../../shared/components/UIElements/Card';

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <Card>
        <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className='users-list'>
      {props.items.map(user => (
        <UserItems 
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UserList;
