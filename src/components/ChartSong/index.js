import React from 'react';
import classNames from 'classnames/bind';

import styles from './ChartSong.module.scss';
import { BsFillPlayFill } from 'react-icons/bs';
import { GoDash } from 'react-icons/go';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';

const cx = classNames.bind(styles);

const ChartSong = ({ sort, week, SONGS }) => {
    let CURRENT_LIST_SONGS = SONGS;
    if (sort) {
        CURRENT_LIST_SONGS = SONGS.slice(0, 3);
    }

    return (
        <div className={cx('wrapper')}>
            {CURRENT_LIST_SONGS.map((song, id) => (
                <div key={id} className={cx('song', { full: !sort, week })}>
                    <div className={cx('song-left')}>
                        <div className={cx('rank', { 'is-top1': id === 0, 'is-top2': id === 1, 'is-top3': id === 2 })}>
                            {id + 1}
                        </div>
                        {!sort && !song.up && !song.down && (
                            <span className={cx('dash')}>
                                <GoDash />
                            </span>
                        )}
                        {!sort && song.up && (
                            <div className={cx('sort')}>
                                <span className={cx('arrow', 'up')}>
                                    <IoMdArrowDropup />
                                </span>
                                <span className={cx('number')}>{song.up}</span>
                            </div>
                        )}
                        {!sort && song.down && (
                            <div className={cx('sort')}>
                                <span className={cx('arrow', 'down')}>
                                    <IoMdArrowDropdown />
                                </span>
                                <span className={cx('number')}>{song.down}</span>
                            </div>
                        )}
                        <div className={cx('control')}>
                            <img src={song.image} alt={song.name} className={cx('image')} />
                            <div className={cx('layout')}>
                                <span className={cx('icon')}>
                                    <BsFillPlayFill />
                                </span>
                            </div>
                        </div>
                        <div className={cx('details')}>
                            <span className={cx('name')}>{song.name}</span>
                            <span className={cx('artists')}>{song.artists}</span>
                        </div>
                    </div>
                    <div className={cx('song-right')}>
                        {sort ? (
                            <div className={cx('percent')}>{song.percent}</div>
                        ) : (
                            <div className={cx('time')}>{song.time}</div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChartSong;
