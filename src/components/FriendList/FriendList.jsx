import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.friendWrap}>
      <ul className={css.friend__list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.item} key={id}>
              <span className={`${css.status} ${css[isOnline]}`}>
                {isOnline}
              </span>
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="62"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
