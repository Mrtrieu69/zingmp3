import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import { TbRepeat } from 'react-icons/tb';

import styles from './Footer.module.scss';
import { InputProgress } from '../../components';
import { Button } from '../../components';

const cx = classNames.bind(styles);

const Player = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(50);

    const inputProgress = useRef();

    const handleChange = (e) => {
        const value = e.target.value;
        setProgress(value);

        inputProgress.current.style.background = `linear-gradient(90deg, var(--progressbar-active-bg) ${value}%, var(--progressbar-player-bg) ${value}%)`;
    };

    return (
        <div className={cx('player')}>
            <div className={cx('actions')}>
                <Button size="medium" rounded className={cx('btn-player', 'active')} icon={<BiShuffle />} />
                <Button size="medium" rounded className={cx('btn-player')} icon={<MdSkipPrevious />} />
                <Button
                    onClick={() => setIsPlaying(!isPlaying)}
                    size="large"
                    rounded
                    className={cx('btn-player', 'separate')}
                    icon={isPlaying ? <BsPauseCircle /> : <BsPlayCircle />}
                />
                <Button size="medium" rounded className={cx('btn-player')} icon={<MdSkipNext />} />
                <Button size="medium" rounded className={cx('btn-player')} icon={<TbRepeat />} />
            </div>
            <div className={cx('progress')}>
                <span className={cx('time', 'left')}>00:00</span>
                <InputProgress ref={inputProgress} value={progress} onChange={handleChange} />
                <span className={cx('time', 'right')}>03:23</span>
            </div>
        </div>
    );
};

export default Player;
