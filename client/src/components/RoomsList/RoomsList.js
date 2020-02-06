import React from 'react';
import { node } from 'prop-types';

import RoomItem from '../../components/RoomItem';

import styles from './RoomsList.module.scss';

const RoomsList = ({ rooms, title }) => (
  <div className={styles.wrapper}>
    <h1>{title}</h1>
    <ul className={styles.list}>
      {rooms.map(room => (
        <RoomItem key={room} item={room} />
      ))}
    </ul>
  </div>
);

RoomsList.propTypes = {
  children: node,
};

export default RoomsList;