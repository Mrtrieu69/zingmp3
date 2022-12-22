import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { MdTimer, MdMoreHoriz } from 'react-icons/md';

import { Button, Tippy } from '../../../components';
import styles from './PlayerQueue.module.scss';
import PlayerQueueItem from './PlayerQueueItem';
import TimerSetting from './TimerSetting';

const cx = classNames.bind(styles);

const PlayerQueue = ({ close, className }) => {
    const [showTimerSetting, setShowTimerSetting] = useState(false);

    const { idCurrentSong } = useSelector((state) => state.music);
    const currentList = useSelector((state) => state.music[state.music['currentList']]);

    const nextList = [...currentList].splice(idCurrentSong + 1);

    const closeTimerSetting = (e) => {
        setShowTimerSetting(false);
        e.stopPropagation();
    };

    return (
        <div className={cx('wrapper', { close: close, [className]: className })}>
            <div className={cx('header')}>
                <div className={cx('panel')}>
                    <div className={cx('item', { active: true })}>
                        <h6 className={cx('title')}>Playlist</h6>
                    </div>
                    <div className={cx('item', 'disable')}>
                        <h6 className={cx('title')}>Recently</h6>
                    </div>
                </div>
                <Tippy title="Timer to stop playing music">
                    <Button
                        size="small"
                        onClick={() => setShowTimerSetting(true)}
                        rounded
                        icon={<MdTimer />}
                        className={cx('btn')}
                    />
                </Tippy>
                <Tippy title="More">
                    <Button size="small" rounded icon={<MdMoreHoriz />} className={cx('btn')} />
                </Tippy>
            </div>
            <div className={cx('body')}>
                <div className={cx('playlist')}>
                    {currentList.slice(0, idCurrentSong + 1).map((item, index) => (
                        <PlayerQueueItem key={item.id} index={index} {...item} />
                    ))}
                    {nextList.length !== 0 && <div className={cx('next-songs')}>Next songs</div>}
                    {nextList.map((item, index) => (
                        <PlayerQueueItem key={item.id} index={idCurrentSong + 1 + index} {...item} />
                    ))}
                </div>
            </div>
            {showTimerSetting && <TimerSetting onClose={closeTimerSetting} />}
        </div>
    );
};

export default PlayerQueue;
