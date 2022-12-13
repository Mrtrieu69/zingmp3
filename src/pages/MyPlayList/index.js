import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import styles from './MyPlayList.module.scss';
import { Button, Playlist } from '../../components';
import { useTransitionShow } from '../../hooks';
import { play, pause, startApp, setCurrentList, setSong } from '../../features/music/musicSlice';
import { PLAYLISTS } from '../../data/playlists/index';

import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

const cx = classNames.bind(styles);

const MyPlayList = () => {
    const { idList } = useParams();
    const listSongs = useSelector((state) => state.music[idList]);
    const { isPlaying, isFirstStartApp, currentList, idCurrentSong } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const infoList = PLAYLISTS[idList];

    const { isTransition, isShow, setIsShow } = useTransitionShow(300);

    const handlePlay = () => {
        dispatch(setCurrentList(idList));
        dispatch(setSong(idCurrentSong));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }
    };

    const handlePause = () => {
        dispatch(pause());
    };

    useEffect(() => {
        setIsShow(isPlaying);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('media')}>
                    <div className={cx('sticky')}>
                        <figure
                            className={cx('media-left', {
                                active: isPlaying && idList === currentList,
                                'spin-off': isTransition && !isShow,
                            })}
                        >
                            <img src={infoList.image} className={cx('image')} alt="" />
                            {isPlaying && idList === currentList ? (
                                <div onClick={handlePause} className={cx('mask')}>
                                    <span className={cx('play')}>
                                        <span
                                            style={{ backgroundImage: 'url("/images/gif/icon-playing.gif")' }}
                                            className={cx('pause-icon')}
                                        ></span>
                                    </span>
                                </div>
                            ) : (
                                <div onClick={handlePlay} className={cx('mask')}>
                                    <span className={cx('play')}>
                                        <BsPlayFill />
                                    </span>
                                </div>
                            )}
                        </figure>
                        <div className={cx('media-right')}>
                            <div className={cx('info')}>
                                <h3 className={cx('title')}>{infoList.name}</h3>
                                <p className={cx('desc')}>Updated: {infoList.updated}</p>
                                <p className={cx('desc')}>{infoList.artists}</p>
                                <p className={cx('desc')}>{infoList.likes} likes</p>
                            </div>
                            <div className={cx('controls')}>
                                {isPlaying && idList === currentList ? (
                                    <div onClick={handlePause} className={cx('control')}>
                                        <span className={cx('control-play')}>
                                            <BsPauseFill />
                                        </span>
                                        Tạm dừng
                                    </div>
                                ) : (
                                    <div onClick={handlePlay} className={cx('control')}>
                                        <span className={cx('control-play')}>
                                            <BsPlayFill />
                                        </span>
                                        Tiếp tục phát
                                    </div>
                                )}
                                <div className={cx('actions')}>
                                    <Button className={cx('icon', 'active')} rounded icon={<AiFillHeart />} />
                                    <Button className={cx('icon')} rounded icon={<FiMoreHorizontal />} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('playlist')}>
                    <Playlist songs={listSongs} />
                </div>
            </div>
        </div>
    );
};

export default MyPlayList;
