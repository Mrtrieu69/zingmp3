import React, { useEffect, useRef, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { BsCameraVideo, BsVolumeUp, BsVolumeMute, BsMusicNoteList, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';

import Player from './Player';
import Media from './Media';
import styles from './Footer.module.scss';
import PlayerQueue from './PlayerQueue';
import NowPlaying from './NowPlaying';
import { useTransitionShow } from '../../hooks';
import { Button, InputProgress } from '../../components';
import { togglePlay, setListPlayed, setSong, play, pause } from '../../features/music/musicSlice';
import { Context } from '../../context';

const cx = classNames.bind(styles);

const Footer = () => {
    const [volume, setVolume] = useState(30);
    const [isMute, setIsMute] = useState(false);
    const [audioEl, setAudioEl] = useState(null);
    const navigate = useNavigate();

    const { setForceRerender } = useContext(Context);

    const { isLoadingData, isPlaying, isRandom, listPlayed, currentList, idCurrentSong } = useSelector(
        (state) => state.music,
    );
    const listSongs = useSelector((state) => state.music[state.music.currentList]);
    const dispatch = useDispatch();

    const { isShow: isShowPlayerQueue, isTransition, setIsShow: setIsShowPlayerQueue } = useTransitionShow(500);
    const {
        isShow: showNowPlaying,
        isTransition: transitionNowPlaying,
        setIsShow: setShowNowPlaying,
    } = useTransitionShow(450);

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
        const length = listSongs.length;
        const copyList = listPlayed.length === length - 1 ? [] : [...listPlayed];
        let random;

        do {
            random = Math.floor(Math.random() * length);
        } while (copyList.includes(random) || random === listSongs.id);

        dispatch(setListPlayed(random));
        return random;
    };

    const handleNext = () => {
        if (listSongs.length <= 1) {
            dispatch(pause());
            dispatch(play());
            return;
        }
        if (isRandom) {
            const index = getRandomSong();
            dispatch(setSong(index));
        } else {
            dispatch(setSong(idCurrentSong + 1));
        }
    };

    const handlePrev = () => {
        if (listSongs.length <= 1) {
            dispatch(pause());
            dispatch(play());
            return;
        }
        dispatch(setSong(idCurrentSong - 1));
    };

    const handleRedirect = () => {
        if (currentList === 'favorite-songs') {
            navigate(`/mymusic`);
        } else {
            navigate(`/album/${currentList}`);
        }

        // force rerender to scroll to current song
        setForceRerender(false);
        setTimeout(() => setForceRerender(true), 0);
    };

    const handleShowPlayerQueue = (e) => {
        setIsShowPlayerQueue(!isShowPlayerQueue);
        e.stopPropagation();
    };

    const handleShowNowPlaying = () => {
        setShowNowPlaying(true);
    };

    useEffect(() => {
        setAudioEl(document.querySelector('#audio'));

        if (audioEl) {
            audioEl.volume = volume / 100;
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [audioEl]);

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
    }, [isShowPlayerQueue, setIsShowPlayerQueue]);

    return (
        <>
            <div id="footer" className={cx('wrapper-bg')}>
                <div id="mini-player" onClick={handleRedirect} className={cx('wrapper', { active: showNowPlaying })}>
                    <Media hide={showNowPlaying} />
                    <Player audioEl={audioEl} onNext={handleNext} onPrev={handlePrev} active={transitionNowPlaying} />
                    <div className={cx('controls', { hide: showNowPlaying })}>
                        <Button
                            rounded
                            size="medium"
                            onClick={handleShowNowPlaying}
                            className={cx('btn-control')}
                            icon={<BsCameraVideo />}
                        />
                        <Button
                            rounded
                            size="medium"
                            className={cx('btn-control')}
                            onClick={handleMute}
                            icon={isMute ? <BsVolumeMute /> : <BsVolumeUp />}
                        />
                        <div onClick={(e) => e.stopPropagation()}>
                            <InputProgress
                                ref={volumeRef}
                                className={cx('volume')}
                                onChange={handleChange}
                                value={isMute ? 0 : volume}
                                initialValue={isMute ? 0 : volume}
                            />
                        </div>
                        <div className={cx('narrow')}></div>
                        <button onClick={handleShowPlayerQueue} className={cx('list', { active: isShowPlayerQueue })}>
                            <span className={cx('icon')}>
                                <BsMusicNoteList />
                            </span>
                        </button>
                    </div>

                    {/* Mobile */}
                    <div className={cx('controls-mobile')}>
                        <Button
                            size="mobile"
                            onClick={handlePrev}
                            rounded
                            className={cx('btn-player')}
                            icon={<MdSkipPrevious />}
                        />
                        {isLoadingData ? (
                            <span className={cx('loader-icon')}>
                                <BiLoader />
                            </span>
                        ) : (
                            <Button
                                onClick={handlePlayMusic}
                                size="mobile"
                                rounded
                                className={cx('btn-player')}
                                icon={isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                            />
                        )}
                        <Button
                            size="mobile"
                            onClick={handleNext}
                            rounded
                            className={cx('btn-player')}
                            icon={<MdSkipNext />}
                        />
                    </div>
                </div>
                {transitionNowPlaying && <NowPlaying setShowNowPlaying={setShowNowPlaying} close={!showNowPlaying} />}
            </div>
            {isTransition && <PlayerQueue className={cx('player-queue')} close={!isShowPlayerQueue} />}
        </>
    );
};

export default Footer;
