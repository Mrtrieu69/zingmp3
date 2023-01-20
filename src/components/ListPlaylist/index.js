import classNames from 'classnames/bind';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import Button from '../Button';

import styles from './ListPlaylist.module.scss';

const cx = classNames.bind(styles);

const ListPlaylist = ({ list }) => {
    let customList = list;

    if (customList.length > 5) {
        customList = customList.slice(0, 5);
    }

    return (
        <div className={cx('list')}>
            {customList.map((item) => (
                <div key={item.encodeId} className={cx('item')}>
                    <div style={{ backgroundImage: `url(${item.thumbnailM})` }} className={cx('card')}>
                        <div className={cx('layout')}>
                            <Button icon={<AiOutlineHeart />} rounded className={cx('icon')} />
                            <Button icon={<BsPlayFill />} rounded className={cx('icon', 'icon-play')} />
                            <Button icon={<MdMoreHoriz />} rounded className={cx('icon')} />
                        </div>
                    </div>
                    <h4 className={cx('name')}>
                        <a href="#1" className={cx('link')}>
                            {item.title}
                        </a>
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default ListPlaylist;
