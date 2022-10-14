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
    const [isVolumeActive, setIsVolumeActive] = useState(true);
    const [volume, setVolume] = useState(50);
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
        setVolume(value);
        if (audioEl) {
            audioEl.volume = value / 100;
        }
        volumeRef.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${value}%, var(--progressbar-player-bg) ${value}%)`;
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
                            onClick={() => setIsVolumeActive(!isVolumeActive)}
                            icon={isVolumeActive ? <BsVolumeUp /> : <BsVolumeMute />}
                        />
                        <InputProgress
                            ref={volumeRef}
                            className={cx('volume')}
                            onChange={handleChange}
                            value={volume}
                            initialValue={50}
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
