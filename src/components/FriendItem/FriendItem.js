import PropTypes from 'prop-types';
import style from 'components/FriendItem/FriendItem.module.css';

export default function FriendItem(props) {
    const{ avatar, name, isOnline} = props;
    return (
        <li className={style.item}>
            <span className={isOnline ? style.on : style.off}></span>
            <img className={style.avatar} src={avatar} alt="Friend_avatar" width="48" />
            <p className={style.name}>{name}</p>
        </li>
    );
}

FriendItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}