import React from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';

import styles from './Playlist.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const Playlist = ({ songs, onPlay = () => {}, onLike = () => {} }) => {
    return (
        <div className={cx('list')}>
            <div className={cx('list-header')}>
                <span className={cx('list-text')}>Song</span>
                <span className={cx('list-time')}>Time</span>
            </div>
            {songs.map((song, id) => (
                <div key={id} className={cx('media')}>
                    <div className={cx('media-left')}>
                        <span className={cx('icon-music')}>
                            <BsMusicNoteBeamed />
                        </span>
                        <div className={cx('block')}>
                            <img src={song.image} className={cx('song-thumb')} alt={song.name} />
                            <span onClick={onPlay} className={cx('mask')}>
                                <BsFillPlayFill />
                            </span>
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
