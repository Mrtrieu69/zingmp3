import React, { useEffect, useRef, useState, useCallback } from 'react';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';
import { BsCameraVideo, BsVolumeUp, BsVolumeMute, BsMusicNoteList, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { BiMicrophone, BiLoader } from 'react-icons/bi';
import { MdSkipNext } from 'react-icons/md';

import Player from './Player';
import Media from './Media';
import styles from './Footer.module.scss';
import PlayerQueue from './PlayerQueue';
import { useTransitionShow } from '../../hooks';
import { Button, InputProgress } from '../../components';
import { togglePlay, setListPlayed, setSong } from '../../features/music/musicSlice';

const cx = classNames.bind(styles);

const Footer = () => {
    const [volume, setVolume] = useState(30);
    const [isMute, setIsMute] = useState(false);
    const [audioEl, setAudioEl] = useState(null);

    const { isLoadingData, isPlaying, isRandom, currentSong, listPlayed } = useSelector((state) => state.music);

    const currentList = useSelector((state) => state.music[state.music.currentList]);

    const dispatch = useDispatch();

    const { isShow: isShowPlayerQueue, isTransition, setIsShow: setIsShowPlayerQueue } = useTransitionShow(500);

    const volumeRef = useRef();

    const handleChange = (e) => {
        const value = e.target.value;
        if (isMute) {
            setIsMute(false);
            audioEl.muted = false;
        }

        setVolume(value);
        if (audioEl) {
            audioEl.volume = value / 100;
        }
        volumeRef.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${value}%, var(--progressbar-player-bg) ${value}%)`;
    };

    const handleMute = () => {
        if (isMute) {
            audioEl.muted = false;
            volumeRef.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${volume}%, var(--progressbar-player-bg) ${volume}%)`;
        } else {
            volumeRef.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${0}%, var(--progressbar-player-bg) ${0}%)`;
            audioEl.muted = true;
        }
        setIsMute(!isMute);
    };

    const handlePlayMusic = () => {
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

    const handleNext = useCallback(() => {
        if (isRandom) {
            const index = getRandomSong();
            dispatch(setSong(index));
        } else {
            dispatch(setSong(currentSong.id + 1));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentSong, isRandom, getRandomSong]);

    useEffect(() => {
        setAudioEl(document.querySelector('#audio'));
    }, []);

    useEffect(() => {
        function removeClickListener() {
            window.removeEventListener('click', outsideClickListener);
        }

        function outsideClickListener(e) {
            if (!e.target.closest(`.${cx('player-queue')}`) && !e.target.closest(`#footer`)) {
                setIsShowPlayerQueue(false);
                removeClickListener();
            }
        }
        if (isShowPlayerQueue) {
            setTimeout(() => window.addEventListener('click', outsideClickListener), 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isShowPlayerQueue]);

    return (
        <>
            <div id="footer" className={cx('wrapper-bg')}>
                <div id="mini-player" className={cx('wrapper')}>
                    <Media />
                    <Player audioEl={audioEl} onNext={handleNext} />
                    <div className={cx('controls')}>
                        <Button rounded size="medium" className={cx('btn-control')} icon={<BsCameraVideo />} />
                        <Button rounded size="medium" className={cx('btn-control')} icon={<BiMicrophone />} />
                        <Button
                            rounded
                            size="medium"
                            className={cx('btn-control')}
                            onClick={handleMute}
                            icon={isMute ? <BsVolumeMute /> : <BsVolumeUp />}
                        />
                        <InputProgress
                            ref={volumeRef}
                            className={cx('volume')}
                            onChange={handleChange}
                            value={isMute ? 0 : volume}
                            initialValue={isMute ? 0 : volume}
                        />
                        <div className={cx('narrow')}></div>
                        <button
                            onClick={() => setIsShowPlayerQueue(!isShowPlayerQueue)}
                            className={cx('list', { active: isShowPlayerQueue })}
                        >
                            <span className={cx('icon')}>
                                <BsMusicNoteList />
                            </span>
                        </button>
                    </div>
                    <div className={cx('controls-mobile')}>
                        {isLoadingData ? (
                            <span className={cx('loader-icon')}>
                                <BiLoader />
                            </span>
                        ) : (
                            <Button
                                onClick={handlePlayMusic}
                                size="medium"
                                rounded
                                className={cx('btn-player')}
                                icon={isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                            />
                        )}
                        <Button
                            size="medium"
                            onClick={handleNext}
                            rounded
                            className={cx('btn-player')}
                            icon={<MdSkipNext />}
                        />
                    </div>
                </div>
            </div>
            {isTransition && <PlayerQueue className={cx('player-queue')} close={!isShowPlayerQueue} />}
        </>
    );
};

export default Footer;
