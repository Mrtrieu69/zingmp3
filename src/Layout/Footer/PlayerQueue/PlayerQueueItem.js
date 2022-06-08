import React from 'react';
import classNames from 'classnames/bind';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';

import { Button } from '../../../components';
import styles from './PlayerQueue.module.scss';

const cx = classNames.bind(styles);

const PlayerQueueItem = ({ isActive, title, artists, image, isLike, isPlay }) => {
    // State is used by redux, the current state is fake

    const handlePlay = () => {};

    const handleLike = () => {};

    return (
        <div className={cx('song', { active: isActive })}>
            <div className={cx('main')}>
                <div className={cx('block')}>
                    <img className={cx('image')} src={image} alt="song" />
                    <span onClick={handlePlay} className={cx('icon')}>
                        {isPlay ? <BsPauseFill /> : <BsPlayFill />}
                    </span>
                </div>
                <div className={cx('desc')}>
                    <p className={cx('title-song')}>{title}</p>
                    <p className={cx('artists')}>{artists}</p>
                </div>
            </div>
            <div className={cx('more')}>
                <Button
                    onClick={handleLike}
                    size="small"
                    rounded
                    icon={isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                    className={cx('btn-more', { like: isLike })}
                />

                <Button size="small" rounded icon={<MdMoreHoriz />} className={cx('btn-more')} />
            </div>
        </div>
    );
};

export default PlayerQueueItem;
