import React from 'react';
import { useRef, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';
import { BiLoader } from 'react-icons/bi';

import { Button } from '../../../components';
import styles from './PlayerQueue.module.scss';
import { play, pause, setSong } from '../../../features/music/musicSlice';

const cx = classNames.bind(styles);

const PlayerQueueItem = ({ name, artists, image, isLike, id }) => {
    const { isPlaying, currentSong, isLoadingData } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const songRef = useRef();

    const handleTogglePlay = () => {
        if (currentSong.id === id) {
            if (isPlaying) {
                dispatch(pause());
            } else {
                dispatch(setSong(id));
                dispatch(play());
            }
            return;
        }

        dispatch(setSong(id));
        dispatch(play());
    };

    useEffect(() => {
        if (currentSong.id === id) {
            songRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentSong, id]);

    return (
        <div ref={songRef} className={cx('song', { active: currentSong.id === id, prev: currentSong.id > id })}>
            <div className={cx('main')}>
                <div className={cx('block')}>
                    <img className={cx('image')} src={image} alt="song" />
                    {id === currentSong.id && isLoadingData ? (
                        <span className={cx('loader-icon')}>
                            <BiLoader />
                        </span>
                    ) : (
                        <span
                            onClick={handleTogglePlay}
                            className={cx('icon', { playing: isPlaying && currentSong.id === id })}
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
                    <p className={cx('title-song')}>{name}</p>
                    <p className={cx('artists')}>{artists}</p>
                </div>
            </div>
            <div className={cx('more')}>
                <Button
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
