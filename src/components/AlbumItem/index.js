import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import Button from '../Button';
import { Loader } from '../Icons';
import styles from './AlbumItem.module.scss';
import { setCurrentList, setSong, play, startApp, pause } from '../../features/music/musicSlice';

import { MdMoreHoriz } from 'react-icons/md';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const AlbumItem = ({ children, small, showSubtitle, showArtists, ...item }) => {
    const { isPlaying, currentList, isFirstStartApp, idCurrentSong, isLoadingData } = useSelector(
        (state) => state.music,
    );
    const dispatch = useDispatch();

    const handlePlay = (e) => {
        dispatch(setCurrentList(item.type));
        dispatch(setSong(idCurrentSong));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }
    };

    const handlePause = (e) => {
        dispatch(pause());

        e.stopPropagation();
        e.preventDefault();
    };

    const handleEvent = (e) => {};

    const handleChangeLink = () => {
        document.querySelector('#main').scrollTop = 0;
    };

    return (
        <div className={cx('item', { small })}>
            <Link
                to={item.path}
                onClick={handleChangeLink}
                style={{ backgroundImage: item.image }}
                className={cx('card')}
            >
                <div className={cx('controls', { active: isPlaying && currentList === item.type })}>
                    <Button
                        onClick={(e) => handleEvent(e)}
                        icon={item.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                        rounded
                        className={cx('icon', { like: item.isLike })}
                    />
                    {isLoadingData && currentList === item.type ? (
                        <div className={cx('loading')}>
                            <Loader white />
                        </div>
                    ) : isPlaying && currentList === item.type ? (
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
            <div className={cx('content')}>
                <Link onClick={handleChangeLink} to={item.path} className={cx('name-card')}>
                    {item.name}
                </Link>
                {showSubtitle && <span className={cx('subtitle')}>{item.subTitle}</span>}
                {showArtists && <span className={cx('subtitle')}>{item.artists}</span>}
            </div>
        </div>
    );
};

export default AlbumItem;
