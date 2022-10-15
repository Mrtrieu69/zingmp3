import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { BsCameraVideo, BsVolumeUp, BsVolumeMute, BsMusicNoteList } from 'react-icons/bs';
import { BiMicrophone } from 'react-icons/bi';

import Player from './Player';
import Media from './Media';
import styles from './Footer.module.scss';
import { InputProgress } from '../../components';
import PlayerQueue from './PlayerQueue';
import { useTransitionShow } from '../../hooks';
import { Button } from '../../components';

const cx = classNames.bind(styles);

const Footer = () => {
    const [volume, setVolume] = useState(50);
    const [isMute, setIsMute] = useState(false);
    const [audioEl, setAudioEl] = useState(null);
    const { isShow: isShowPlayerQueue, isTransition, setIsShow: setIsShowPlayerQueue } = useTransitionShow(500);

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

    useEffect(() => {
        setAudioEl(document.querySelector('#audio'));
    }, []);

    return (
        <>
            <div id="footer" className={cx('wrapper-bg')}>
                <div id="mini-player" className={cx('wrapper')}>
                    <Media />
                    <Player audioEl={audioEl} />
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
                </div>
            </div>
            {isTransition && <PlayerQueue className={cx('player-queue')} close={!isShowPlayerQueue} />}
        </>
    );
};

export default Footer;
