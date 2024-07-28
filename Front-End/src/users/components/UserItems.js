import React from 'react';
import './UserItems.css'; // Ensure you have the correct CSS file
import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card';
import { Link } from 'react-router-dom';



const UserItems = (props) => {
  const placeCount = parseInt(props.placeCount, 10);
  return (
    <li className='user-item'>
      <Card className='user-item__content' >
        <Link to={`/${props.id}/places`}>
          <div className='user-item__image'>
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className='user-item__info'>
            <h2>{props.name}</h2>
            <h3>{placeCount} {placeCount === 1 ? 'place' : 'places'}</h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItems;
