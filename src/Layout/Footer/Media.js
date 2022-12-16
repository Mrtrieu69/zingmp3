import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';

import { SingleNote, DoubleNote } from '../../components/Icons';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

const Media = () => {
    const { currentSong, isPlaying } = useSelector((state) => state.music);

    const handleLike = (e) => {
        e.stopPropagation();
    };

    return (
        <div className={cx('media', { active: isPlaying })}>
            <div className={cx('media-left')}>
                <img className={cx('image')} src={currentSong.image} alt="song" />
                {isPlaying && (
                    <>
                        <SingleNote className={cx('note', 'note-1-spin')} />
                        <DoubleNote className={cx('note', 'note-2-spin')} />
                        <SingleNote className={cx('note', 'note-3-spin')} />
                        <DoubleNote className={cx('note', 'note-4-spin')} />
                    </>
                )}
            </div>
            <div className={cx('media-content')}>
                <div className={cx('name-song', { active: currentSong.name.length > 16 && isPlaying })}>
                    <div className={cx('content')}>
                        <span className={cx('text')}>{currentSong.name}</span>
                        {currentSong.name.length > 16 && <span className={cx('text')}>{currentSong.name}</span>}
                    </div>
                </div>
                <h3 className={cx('author')}>{currentSong.artists}</h3>
            </div>
            <div className={cx('media-right')}>
                <button onClick={handleLike} className={cx('btn')}>
                    <span className={cx('icon', { active: currentSong.isLike })}>
                        {currentSong.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                    </span>
                </button>
                <button onClick={(e) => e.stopPropagation()} className={cx('btn', 'large', 'more')}>
                    <span className={cx('icon')}>
                        <MdMoreHoriz />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Media;
