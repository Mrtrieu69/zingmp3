import React from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { SingleNote, DoubleNote } from '../../components/Icons';
import { likeSong, unlikeSong, setSong, setCurrentList } from '../../features/music/musicSlice';
import styles from './Footer.module.scss';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';

const cx = classNames.bind(styles);

const Media = () => {
    const { currentSong, isPlaying, idCurrentSong, currentList } = useSelector((state) => state.music);
    const favoriteSongs = useSelector((state) => state.music['favorite-songs']);
    const dispatch = useDispatch();

    const handleLike = (e) => {
        dispatch(likeSong(currentSong));
        dispatch(setSong(idCurrentSong));
        toast.success('Added to favorite songs!');

        e.stopPropagation();
    };

    const handleUnlike = (e) => {
        if (currentList === 'favorite-songs' && favoriteSongs.length <= 1) {
            dispatch(setCurrentList('world-music'));
        }
        dispatch(unlikeSong(currentSong));
        dispatch(setSong(idCurrentSong));
        toast.success('Removed from favorite songs!');

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
                <h3 className={cx('author', 'line-clamp')}>{currentSong.artists}</h3>
            </div>
            <div className={cx('media-right')}>
                {currentSong.isLike ? (
                    <button onClick={handleUnlike} className={cx('btn')}>
                        <span className={cx('icon', 'active')}>
                            <AiFillHeart />
                        </span>
                    </button>
                ) : (
                    <button onClick={handleLike} className={cx('btn')}>
                        <span className={cx('icon')}>
                            <AiOutlineHeart />
                        </span>
                    </button>
                )}
                <button onClick={(e) => e.stopPropagation()} className={cx('btn', 'large')}>
                    <span className={cx('icon')}>
                        <MdMoreHoriz />
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Media;
