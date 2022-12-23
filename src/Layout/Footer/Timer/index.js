import classNames from 'classnames/bind';
import { useState, useContext, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Timer.module.scss';
import { Tippy } from '../../../components';
import { ConfirmModal } from '../components';
import { Context } from '../../../context';
import { pause } from '../../../features/music/musicSlice';

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

    const { setTimer, timer } = useContext(Context);
    const { isPlaying } = useSelector((state) => state.music);
    const dispatch = useDispatch();

    const timeoutTimer = useRef();

    const handleCloseModal = () => {
        setShowModalClose(false);
    };

    const handleCloseTimer = () => {
        setShowModalClose(false);
        setTimer(null);
    };

    useEffect(() => {
        if (timer > 0) {
            timeoutTimer.current = setTimeout(() => setTimer(timer - 1), 1000);
        } else if (timer === 0) {
            if (isPlaying) {
                dispatch(pause());
                setTimer(null);
            } else {
                setTimer(null);
            }
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
        </div>
    );
};

export default Timer;
