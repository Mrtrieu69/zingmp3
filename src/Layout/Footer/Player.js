import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import { TbRepeat } from 'react-icons/tb';

import styles from './Footer.module.scss';
import { Loader } from '../../components/Icons';
import { togglePlay, toggleIsRepeat, toggleIsRandom, setIsLoadingData } from '../../features/music/musicSlice';
import { Tippy, Button } from '../../components';
import { InputProgress } from './components';
import { useMediaSession as mediaSession } from '../../hooks';
import { formatTime } from '../../utils';

const cx = classNames.bind(styles);

const Player = ({ audioEl, onNext, onPrev, active, isIdle }) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const { currentSong, isPlaying, isRepeat, isRandom, isLoadingData, idCurrentSong } = useSelector(
        (state) => state.music,
    );

    const dispatch = useDispatch();

    const inputProgress = useRef();

    const handleChange = (e) => {
        const value = e.target.value;
        setProgress(value);
        const durationTime = audioEl.duration;
        if (audioEl) {
            if (durationTime) {
                audioEl.currentTime = (value / 100) * durationTime;
                inputProgress.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${value}%, var(--progressbar-player-bg) ${value}%)`;
            }
        }
    };

    const handlePlayMusic = () => {
        dispatch(togglePlay());
    };

    const handleMouseDown = () => {
        if (audioEl) {
            audioEl.muted = true;
        }
    };

    const handleMouseUp = () => {
        if (audioEl) {
            audioEl.muted = false;
        }
    };

    useEffect(() => {
        mediaSession(currentSong, audioEl, onNext, onPrev);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong, audioEl]);

    useEffect(() => {
        const handleEnded = () => {
            if (isRepeat) {
                audioEl.play();
            } else {
                onNext();
            }
        };

        const handleUpdateTime = () => {
            const currentTime = audioEl.currentTime;
            const durationTime = audioEl.duration;
            if (durationTime) {
                const currentPercent = Math.floor((currentTime / durationTime) * 100);
                setProgress(currentPercent);
                inputProgress.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${currentPercent}%, var(--progressbar-player-bg) ${currentPercent}%)`;
            }
            setCurrentTime(currentTime);
        };

        const handleLoadStart = () => {
            dispatch(setIsLoadingData(true));
        };

        const handleLoadeddata = () => {
            dispatch(setIsLoadingData(false));
        };

        if (audioEl) {
            audioEl.addEventListener('ended', handleEnded);
            audioEl.addEventListener('timeupdate', handleUpdateTime);
            audioEl.addEventListener('loadstart', handleLoadStart);
            audioEl.addEventListener('loadeddata', handleLoadeddata);
        }
        return () => {
            if (audioEl) {
                audioEl.removeEventListener('ended', handleEnded);
                audioEl.removeEventListener('timeupdate', handleUpdateTime);
                audioEl.removeEventListener('loadstart', handleLoadStart);
                audioEl.removeEventListener('loadeddata', handleLoadeddata);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioEl, isRepeat, isRandom, idCurrentSong, onNext]);

    useEffect(() => {
        if (audioEl) {
            if (isPlaying) {
                audioEl.play();
            } else {
                audioEl.pause();
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong, isPlaying]);

    return (
        <div className={cx('player', { active, 'is-idle': isIdle })}>
            <div className={cx('actions')}>
                <Tippy title="Random">
                    <Button
                        size="medium"
                        onClick={() => dispatch(toggleIsRandom())}
                        rounded
                        className={cx('btn-player', { active: isRandom })}
                        icon={<BiShuffle />}
                    />
                </Tippy>
                <Button size="medium" onClick={onPrev} rounded className={cx('btn-player')} icon={<MdSkipPrevious />} />
                {isLoadingData ? (
                    <div className={cx('loading')}>
                        <Loader />
                    </div>
                ) : (
                    <Button
                        onClick={handlePlayMusic}
                        size="large"
                        rounded
                        className={cx('btn-player', 'separate')}
                        icon={isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
                    />
                )}
                <Button size="medium" onClick={onNext} rounded className={cx('btn-player')} icon={<MdSkipNext />} />
                <Tippy title="Repeat">
                    <Button
                        size="medium"
                        onClick={() => dispatch(toggleIsRepeat())}
                        rounded
                        className={cx('btn-player', { active: isRepeat })}
                        icon={<TbRepeat />}
                    />
                </Tippy>
            </div>
            <div onClick={(e) => e.stopPropagation()} className={cx('progress')}>
                <span className={cx('time', 'left')}>{formatTime(currentTime)}</span>
                <InputProgress
                    ref={inputProgress}
                    value={progress}
                    initialValue={progress}
                    onChange={handleChange}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                />
                <span className={cx('time', 'right')}>{formatTime(currentSong.duration)}</span>
            </div>
            <audio id="audio" src={currentSong.url} />
        </div>
    );
};

export default Player;
