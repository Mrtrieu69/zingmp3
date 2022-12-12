import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';

import { Button } from '../../components';
import styles from './MyMusic.module.scss';

const cx = classNames.bind(styles);

const PlaylistItem = ({ children, ...item }) => {
    return (
        <div className={cx('item')}>
            <Link to={item.path} style={{ backgroundImage: item.image }} className={cx('card')}>
                <div className={cx('controls')}>
                    <Button
                        icon={item.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                        rounded
                        className={cx('icon', { like: item.isLike })}
                    />
                    <Button icon={<BsPlayFill />} rounded className={cx('icon', 'icon-play')} />
                    <Button icon={<MdMoreHoriz />} rounded className={cx('icon')} />
                </div>
            </Link>
            <div className={cx('content')}>
                <span className={cx('name-card')}>{item.name}</span>
                <span className={cx('subtitle')}>{item.subTitle}</span>
            </div>
        </div>
    );
};

export default PlaylistItem;
