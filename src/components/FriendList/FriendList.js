import PropTypes from 'prop-types';
import style from './FriendList.module.css';

import FriendItem from 'components/FriendItem/FriendItem';

export default function FriendList ({items}) {

    return (
        <ul className={style.friendList}>
            {items.map(item => (
                <FriendItem 
                avatar={item.avatar} 
                name={item.name} 
                isOnline={item.isOnline} 
                key={item.id}
                />
            ))}
            
        </ul>

    )
}

FriendList.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
    }),
};