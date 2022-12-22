import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import { MdTimer, MdMoreHoriz } from 'react-icons/md';

import { Button } from '../../../components';
import styles from './PlayerQueue.module.scss';
import PlayerQueueItem from './PlayerQueueItem';

const cx = classNames.bind(styles);

const PlayerQueue = ({ close, className }) => {
    const { idCurrentSong } = useSelector((state) => state.music);
    const currentList = useSelector((state) => state.music[state.music['currentList']]);

    const nextList = [...currentList].splice(idCurrentSong + 1);

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
                <Button size="small" rounded icon={<MdTimer />} className={cx('btn')} />
                <Button size="small" rounded icon={<MdMoreHoriz />} className={cx('btn')} />
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
        </div>
    );
};

export default PlayerQueue;
