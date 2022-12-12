import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Home.module.scss';
import { Button } from '../../components';
import { setCurrentList, setSong, play, startApp, pause } from '../../features/music/musicSlice';

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';

const cx = classNames.bind(styles);

const PlaylistItem = ({ ...item }) => {
    const { isPlaying, currentList, isFirstStartApp, idCurrentSong } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const handlePlay = (e) => {
        dispatch(setCurrentList(item.type));
        dispatch(setSong(idCurrentSong));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }

        e.preventDefault();
    };

    const handlePause = (e) => {
        dispatch(pause());

        e.preventDefault();
    };

    const handleEvent = (e) => {
        e.preventDefault();
    };

    return (
        <div className={cx('playlist-item')}>
            <Link to={item.path} style={{ backgroundImage: item.image }} className={cx('card')}>
                <div className={cx('layout', { active: isPlaying && currentList === item.type })}>
                    <Button
                        onClick={(e) => handleEvent(e)}
                        icon={item.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                        rounded
                        className={cx('icon', { like: item.isLike })}
                    />
                    {isPlaying && currentList === item.type ? (
                        <span onClick={(e) => handlePause(e)} className={cx('pause')}>
                            <span
                                style={{ backgroundImage: 'url("/images/gif/icon-playing.gif")' }}
                                className={cx('pause-icon')}
                            ></span>
                        </span>
                    ) : (
                        <Button
                            onClick={(e) => handlePlay(e)}
                            icon={<BsPlayFill />}
                            rounded
                            className={cx('icon', 'icon-play')}
                        />
                    )}
                    <Button onClick={(e) => handleEvent(e)} icon={<MdMoreHoriz />} rounded className={cx('icon')} />
                </div>
            </Link>
            <h4 className={cx('name')}>
                <Link to={item.path}>{item.name}</Link>
            </h4>
        </div>
    );
};

export default PlaylistItem;
