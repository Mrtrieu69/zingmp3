import React from 'react';
import classNames from 'classnames/bind';
import { MdTimer, MdMoreHoriz } from 'react-icons/md';

import { Button } from '../../../components';
import styles from './PlayerQueue.module.scss';
import PlayerQueueItem from './PlayerQueueItem';
import playerQueue from '../../../data/playerQueue';

const cx = classNames.bind(styles);

const PlayerQueue = ({ close, className }) => {
    return (
        <div className={cx('wrapper', { close: close, [className]: className })}>
            <div className={cx('header')}>
                <div className={cx('panel')}>
                    <div className={cx('item', { active: true })}>
                        <h6 className={cx('title')}>Playlist</h6>
                    </div>
                    <div className={cx('item')}>
                        <h6 className={cx('title')}>Recently</h6>
                    </div>
                </div>
                <Button size="small" rounded icon={<MdTimer />} className={cx('btn')} />
                <Button size="small" rounded icon={<MdMoreHoriz />} className={cx('btn')} />
            </div>
            <div className={cx('body')}>
                <div className={cx('playlist')}>
                    {playerQueue.map((item, id) => (
                        <PlayerQueueItem key={id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayerQueue;
