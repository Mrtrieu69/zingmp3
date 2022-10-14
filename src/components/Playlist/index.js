import React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';

import styles from './Playlist.module.scss';
import { setSong, pause, play, startApp } from '../../features/music/musicSlice';
import Button from '../Button';
import { useState } from 'react';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const Playlist = ({ songs, onLike = () => {} }) => {
    const [idCurrentSong, setIdCurrentSong] = useState(null);
    const { currentSong, isPlaying, isFirstStartApp } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const handlePlay = (index) => {
        dispatch(setSong(index));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }
    };

    const handlePause = () => {
        dispatch(pause());
    };

    useEffect(() => {
        setIdCurrentSong(currentSong.id);
    }, [currentSong]);

    return (
        <div className={cx('list')}>
            <div className={cx('list-header')}>
                <span className={cx('list-text')}>Song</span>
                <span className={cx('list-time')}>Time</span>
            </div>
            {songs.map((song, id) => (
                <div key={id} className={cx('media', { active: song.id === idCurrentSong })}>
                    <div className={cx('media-left')}>
                        <span className={cx('icon-music')}>
                            <BsMusicNoteBeamed />
                        </span>
                        <div className={cx('block')}>
                            <img src={song.image} className={cx('song-thumb')} alt={song.name} />
                            <div className={cx('mask')}>
                                {isPlaying && song.id === idCurrentSong ? (
                                    <span onClick={handlePause} className={cx('btn-pause')}>
                                        <span
                                            className={cx('pause-icon')}
                                            style={{ backgroundImage: "url('/images/gif/icon-playing.gif')" }}
                                        ></span>
                                    </span>
                                ) : (
                                    <span onClick={() => handlePlay(song.id)} className={cx('btn-play')}>
                                        <BsFillPlayFill />
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={cx('song-info')}>
                            <span className={cx('song-name')}>{song.name}</span>
                            <h3 className={cx('artists')}>{song.artists}</h3>
                        </div>
                    </div>
                    <div className={cx('media-time')}>{song.time}</div>
                    <div className={cx('controls')}>
                        <Button
                            onClick={onLike}
                            rounded
                            icon={song.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                            className={cx('icon', { like: song.isLike })}
                        />
                        <Button rounded icon={<MdMoreHoriz />} className={cx('icon')} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Playlist;
