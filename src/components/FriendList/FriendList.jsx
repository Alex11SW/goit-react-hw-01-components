import React from 'react';
import PropTypes from 'prop-types';
import styles from "./FriendList.module.css";


const FriendList = ({ friends }) => {
    return (
        <ul className={styles['friend-list']}>
            
            {friends.map(({ id, avatar, name, isOnline }) => (
                <li key={id} className={styles.item}>
                    <span className={isOnline ? styles.online : styles.offline}></span>
                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            ))}
        </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;

