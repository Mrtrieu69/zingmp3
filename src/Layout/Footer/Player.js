import React, { useRef, useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import { TbRepeat } from 'react-icons/tb';

import styles from './Footer.module.scss';
import { setSong, togglePlay, toggleIsRepeat, toggleIsRandom, setListPlayed } from '../../features/music/musicSlice';
import { InputProgress } from '../../components';
import { Button } from '../../components';

const cx = classNames.bind(styles);

const Player = ({ audioEl }) => {
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    const { currentSong, isPlaying, isRepeat, isRandom, currentList, listPlayed } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const inputProgress = useRef();

    const formatTime = (time) => {
        const floor = Math.floor(time);
        let min = Math.floor(floor / 60);
        let sec = floor % 60;

        return `0${min}:${sec < 10 ? `0${sec}` : sec}`;
    };

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    };

    const handlePlayMusic = () => {
        if (isPlaying) {
            audioEl.pause();
        } else {
            audioEl.play();
        }
        dispatch(togglePlay());
    };

    const getRandomSong = () => {
        const length = currentList.length;
        const copyList = listPlayed.length === length - 1 ? [] : [...listPlayed];
        let random;

        do {
            random = Math.floor(Math.random() * length);
        } while (copyList.includes(random) || random === currentList.id);
        dispatch(setListPlayed(random));
        return random;
    };

    const handleNext = () => {
        if (isRandom) {
            const index = getRandomSong();
            dispatch(setSong(index));
        } else {
            dispatch(setSong(currentSong.id + 1));
        }
    };

    const handlePrev = () => {
        dispatch(setSong(currentSong.id - 1));
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
        const handleEnded = () => {
            if (isRepeat) {
                audioEl.play();
            } else {
                handleNext();
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

        if (audioEl) {
            audioEl.addEventListener('ended', handleEnded);

            audioEl.addEventListener('timeupdate', handleUpdateTime);
        }
        return () => {
            if (audioEl) {
                audioEl.removeEventListener('ended', handleEnded);
                audioEl.removeEventListener('timeupdate', handleUpdateTime);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioEl, currentSong, isRepeat, isRandom]);

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
        <div className={cx('player')}>
            <div className={cx('actions')}>
                <Button
                    size="medium"
                    onClick={() => dispatch(toggleIsRandom())}
                    rounded
                    className={cx('btn-player', { active: isRandom })}
                    icon={<BiShuffle />}
                />
                <Button
                    size="medium"
                    onClick={handlePrev}
                    rounded
                    className={cx('btn-player')}
                    icon={<MdSkipPrevious />}
                />
                <Button
                    onClick={handlePlayMusic}
                    size="large"
                    rounded
                    className={cx('btn-player', 'separate')}
                    icon={isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
                />
                <Button size="medium" onClick={handleNext} rounded className={cx('btn-player')} icon={<MdSkipNext />} />
                <Button
                    size="medium"
                    onClick={() => dispatch(toggleIsRepeat())}
                    rounded
                    className={cx('btn-player', { active: isRepeat })}
                    icon={<TbRepeat />}
                />
            </div>
            <div className={cx('progress')}>
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
