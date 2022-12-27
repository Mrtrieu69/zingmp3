import React, { useEffect, useRef, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import Player from './Player';
import Media from './Media';
import styles from './Footer.module.scss';
import PlayerQueue from './PlayerQueue';
import NowPlaying from './NowPlaying';
import Timer from './Timer';
import { useListenerIdle, useTransitionShow } from '../../hooks';
import { Button, Tippy } from '../../components';
import { InputProgress } from './components';
import {
    togglePlay,
    setListPlayed,
    setSong,
    play,
    pause,
    likeSong,
    setCurrentList,
    unlikeSong,
} from '../../features/music/musicSlice';
import { Context } from '../../context';

// icons
import { BsVolumeUp, BsVolumeMute, BsMusicNoteList, BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';
import { MdSkipNext } from 'react-icons/md';
import { HiOutlineMicrophone } from 'react-icons/hi';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const cx = classNames.bind(styles);

const Footer = () => {
    const [volume, setVolume] = useState(30);
    const [isMute, setIsMute] = useState(false);
    const [audioEl, setAudioEl] = useState(null);
    const navigate = useNavigate();

    const { setForceRerender, timer, showNowPlaying, transitionNowPlaying, setShowNowPlaying } = useContext(Context);

    const { isLoadingData, isPlaying, isRandom, listPlayed, currentList, idCurrentSong, currentSong } = useSelector(
        (state) => state.music,
    );
    const { listSongs, favoriteSongs } = useSelector((state) => ({
        listSongs: state.music[state.music.currentList],
        favoriteSongs: state.music['favorite-songs'],
    }));
    const dispatch = useDispatch();

    const { isShow: isShowPlayerQueue, isTransition, setIsShow: setIsShowPlayerQueue } = useTransitionShow(500);
    const isIdle = useListenerIdle(4000);

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
                    <Media hide={showNowPlaying} onUnlike={handleUnlike} onLike={handleLike} />
                    <Player
                        isIdle={isIdle}
                        audioEl={audioEl}
                        onNext={handleNext}
                        onPrev={handlePrev}
                        active={transitionNowPlaying}
                    />
                    <div className={cx('controls', { hide: showNowPlaying })}>
                        <Tippy title="Show lyrics">
                            <Button
                                rounded
                                size="medium"
                                onClick={handleShowNowPlaying}
                                className={cx('btn-control', { disable: currentSong.lyric?.length === 0 })}
                                icon={<HiOutlineMicrophone />}
                            />
                        </Tippy>
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
                        {currentSong.isLike ? (
                            <button onClick={handleUnlike} className={cx('btn', 'mobile')}>
                                <span className={cx('icon', 'active')}>
                                    <AiFillHeart />
                                </span>
                            </button>
                        ) : (
                            <button onClick={handleLike} className={cx('btn', 'mobile')}>
                                <span className={cx('icon')}>
                                    <AiOutlineHeart />
                                </span>
                            </button>
                        )}
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
                {transitionNowPlaying && (
                    <NowPlaying
                        isIdle={isIdle}
                        audioEl={audioEl}
                        setShowNowPlaying={setShowNowPlaying}
                        close={!showNowPlaying}
                    />
                )}
                {timer !== null && <Timer />}
            </div>
            {isTransition && <PlayerQueue className={cx('player-queue')} close={!isShowPlayerQueue} />}
        </>
    );
};

export default Footer;
