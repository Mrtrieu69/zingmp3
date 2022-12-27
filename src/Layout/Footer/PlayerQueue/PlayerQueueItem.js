import React from 'react';
import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Button, SongMore, Tippy } from '../../../components';
import styles from './PlayerQueue.module.scss';
import { play, pause, setSong, likeSong, setCurrentList, unlikeSong } from '../../../features/music/musicSlice';

// icons
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import { BiLoader } from 'react-icons/bi';

const cx = classNames.bind(styles);

const PlayerQueueItem = ({ index, children, ...song }) => {
    const { isPlaying, idCurrentSong, isLoadingData, currentList } = useSelector((state) => state.music);
    const favoriteSongs = useSelector((state) => state.music['favorite-songs']);
    const dispatch = useDispatch();

    const songRef = useRef();

    const handleTogglePlay = (e) => {
        if (idCurrentSong === index && isPlaying) {
            dispatch(pause());
            return;
        }
        dispatch(setSong(index));
        dispatch(play());
        e.stopPropagation();
    };

    const handleLike = () => {
        dispatch(likeSong(song));
        dispatch(setSong(idCurrentSong));
        toast.success('Added to favorite songs!');
    };

    const handleUnlike = () => {
        if (currentList === 'favorite-songs' && favoriteSongs.length <= 1) {
            dispatch(setCurrentList('world-music'));
        }
        dispatch(unlikeSong(song));
        if (currentList === 'favorite-songs' && index < idCurrentSong) {
            dispatch(setSong(idCurrentSong - 1));
        } else {
            dispatch(setSong(idCurrentSong));
        }
        toast.success('Removed from favorite songs!');
    };

    useEffect(() => {
        if (idCurrentSong === index) {
            songRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [idCurrentSong, index]);

    return (
        <div ref={songRef} className={cx('song', { active: idCurrentSong === index, prev: idCurrentSong > index })}>
            <div className={cx('main')}>
                <div className={cx('block')}>
                    <img className={cx('image')} src={song.image} alt="song" />
                    {index === idCurrentSong && isLoadingData ? (
                        <span className={cx('loader-icon')}>
                            <BiLoader />
                        </span>
                    ) : (
                        <span
                            onClick={handleTogglePlay}
                            className={cx('icon', { playing: isPlaying && idCurrentSong === index })}
                        >
                            <span
                                className={cx('pause-icon')}
                                style={{ backgroundImage: "url('/images/gif/icon-playing.gif')" }}
                            ></span>
                            <BsPlayFill className={cx('lib-icon')} />
                        </span>
                    )}
                </div>
                <div className={cx('desc')}>
                    <p className={cx('title-song')}>{song.name}</p>
                    <p className={cx('artists')}>{song.artists}</p>
                </div>
            </div>
            <div className={cx('more')}>
                {song.isLike ? (
                    <Tippy title="Remove from favorite songs">
                        <Button
                            size="small"
                            onClick={handleUnlike}
                            rounded
                            icon={<AiFillHeart />}
                            className={cx('btn-more', 'like')}
                        />
                    </Tippy>
                ) : (
                    <Tippy title="Add to favorite songs">
                        <Button
                            size="small"
                            onClick={handleLike}
                            rounded
                            icon={<AiOutlineHeart />}
                            className={cx('btn-more')}
                        />
                    </Tippy>
                )}

                <Tippy title="More">
                    <SongMore song={song}>
                        <Button size="small" rounded icon={<MdMoreHoriz />} className={cx('btn-more')} />
                    </SongMore>
                </Tippy>
            </div>
        </div>
    );
};

export default PlayerQueueItem;
