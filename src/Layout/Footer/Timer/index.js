import classNames from 'classnames/bind';
import { useState, useContext, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Timer.module.scss';
import { Tippy } from '../../../components';
import { ConfirmModal, SettingModal } from '../components';
import { Context } from '../../../context';
import { pause, play } from '../../../features/music/musicSlice';

import { IoMdClose } from 'react-icons/io';

const cx = classNames.bind(styles);

const formatTime = (time) => {
    const hour = parseInt(time / 3600) % 24;
    const minute = parseInt(time / 60) % 60;
    const sec = time % 60;

    return `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${sec < 10 ? `0${sec}` : sec}`;
};

const Timer = () => {
    const [showModalClose, setShowModalClose] = useState(false);
    const [showModalSetting, setShowModalSetting] = useState(false);

    const { setTimer, timer } = useContext(Context);
    const { isPlaying, currentSong } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const timeoutTimer = useRef();

    const handleCloseModal = () => {
        setShowModalClose(false);
    };

    const handleCloseTimer = () => {
        setShowModalClose(false);
        setTimer(null);
    };

    const handleCloseSettingModal = () => {
        setShowModalSetting(false);
        setTimer(null);
    };

    const handleContinuePlay = () => {
        dispatch(play());
        setTimer(null);
    };

    useEffect(() => {
        if (timer > 0) {
            timeoutTimer.current = setTimeout(() => setTimer(timer - 1), 1000);
        } else if (timer === 0) {
            if (isPlaying) {
                dispatch(pause());
            }
            if (showModalClose) {
                setShowModalClose(false);
            }
            setShowModalSetting(true);
        }

        return () => {
            if (timeoutTimer) {
                clearTimeout(timeoutTimer.current);
            }
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer, setTimer, isPlaying]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <span>Music will stop after: </span>
                <span className={cx('time')}>{formatTime(timer)}</span>
            </div>
            <Tippy title="Close timer">
                <span onClick={() => setShowModalClose(true)} className={cx('close')}>
                    <IoMdClose />
                </span>
            </Tippy>
            {showModalClose && <ConfirmModal onClose={handleCloseModal} onConfirm={handleCloseTimer} />}
            {showModalSetting && (
                <SettingModal
                    onClose={handleCloseSettingModal}
                    onAction={handleContinuePlay}
                    title={{ action: 'Continue playing', exit: 'Close' }}
                >
                    <p className={cx('label')}>
                        Music playing time has ended, do you want to continue playing this song?
                    </p>
                    <div className={cx('card')}>
                        <figure className={cx('figure')}>
                            <img src={currentSong.thumb} className={cx('image')} alt="" />
                        </figure>
                        <p className={cx('name', 'line-clamp')}>{currentSong.name}</p>
                        <p className={cx('artists', 'line-clamp')}>{currentSong.artists}</p>
                    </div>
                </SettingModal>
            )}
        </div>
    );
};

export default Timer;
