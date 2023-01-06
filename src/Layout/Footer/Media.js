import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import { SingleNote, DoubleNote } from '../../components/Icons';
import { Tippy, SongMore } from '../../components';
import styles from './Footer.module.scss';

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';

const cx = classNames.bind(styles);

const Media = ({ hide, onLike, onUnlike }) => {
    const { currentSong, isPlaying } = useSelector((state) => state.music);

    return (
        <div className={cx('media', { active: isPlaying, hide })}>
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
                    <Tippy title={'Remove from favorite songs'}>
                        <button onClick={onUnlike} className={cx('btn')}>
                            <span className={cx('icon', 'active')}>
                                <AiFillHeart />
                            </span>
                        </button>
                    </Tippy>
                ) : (
                    <Tippy title="Add to favorite songs">
                        <button onClick={onLike} className={cx('btn')}>
                            <span className={cx('icon')}>
                                <AiOutlineHeart />
                            </span>
                        </button>
                    </Tippy>
                )}
                <Tippy title="More">
                    <SongMore song={currentSong}>
                        <button onClick={(e) => e.stopPropagation()} className={cx('btn', 'large')}>
                            <span className={cx('icon')}>
                                <MdMoreHoriz />
                            </span>
                        </button>
                    </SongMore>
                </Tippy>
            </div>
        </div>
    );
};

export default Media;
