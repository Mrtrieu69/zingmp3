import React from 'react';
import classNames from 'classnames/bind';
import styles from './ChartSong.module.scss';
import { BsFillPlayFill } from 'react-icons/bs';

const cx = classNames.bind(styles);

const SONGS = [
    {
        name: 'Em nên dừng lại',
        artists: 'Khang Việt',
        time: '06:08',
        image: '/images/chartSongs/em-nen-dung-lai.webp',
        percent: '45%',
    },
    {
        name: 'Ngôi sao cô đơn',
        artists: 'Jack',
        time: '04:36',
        image: '/images/chartSongs/ngoi-sao-co-don.webp',
        percent: '29%',
    },
    {
        name: 'Vì mẹ anh bắt chia tay',
        artists: 'Miu Lê, Karik',
        time: '04:22',
        image: '/images/chartSongs/vi-me-anh-bat-chia-tay.webp',
        percent: '26%',
    },
];

const ChartSong = () => {
    return (
        <div className={cx('wrapper')}>
            {SONGS.map((song, id) => (
                <div key={id} className={cx('song')}>
                    <div className={cx('song-left')}>
                        <div className={cx('rank', { 'is-top1': id === 0, 'is-top2': id === 1, 'is-top3': id === 2 })}>
                            {id + 1}
                        </div>
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
                        <div className={cx('percent')}>{song.percent}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChartSong;
