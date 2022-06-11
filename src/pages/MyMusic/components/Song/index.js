import React, { useState } from 'react';
import classNames from 'classnames/bind';

import { EmptyContent } from '../../../../components';
import styles from './Song.module.scss';
import { DragDropSongs } from '../../../../components';

const cx = classNames.bind(styles);

const SONGS = [
    {
        id: '1',
        name: 'Từ thích thích thành thương thương',
        artists: 'AMEE, Hoàng dũng',
        time: '03:24',
        isLike: true,
        image: '/images/songs/tu-thich-thich-thanh-thuong-thuong.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '2',
        name: 'Em bỏ hút thuốc chưa?',
        artists: 'Bích Phương',
        time: '03:51',
        isLike: true,
        image: '/images/songs/em-bo-hut-thuoc-chua.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '3',
        name: 'Em là hoàng hôn',
        artists: 'Vang, Cloud 5',
        time: '03:43',
        isLike: true,
        image: '/images/songs/em-la-hoang-hon.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '4',
        name: 'Lose you',
        artists: 'T.R.I, Rickie',
        time: '03:35',
        isLike: true,
        image: '/images/songs/lose-you.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '5',
        name: 'Cần gì hơn',
        artists: 'Tiên Tiên, Justatee',
        time: '03:27',
        isLike: true,
        image: '/images/songs/can-gi-hon.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '6',
        name: 'Bông hoa chẳng thuộc về ta',
        artists: 'Như Việt',
        time: '03:36',
        isLike: true,
        image: '/images/songs/bong-hoa-chang-thuoc-ve-ta.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '7',
        name: 'Anh à',
        artists: 'Juky San, Thịnh Suy',
        time: '04:06',
        isLike: true,
        image: '/images/songs/anh-a.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '8',
        name: 'Anh luôn là lí do',
        artists: 'ERIk',
        time: '03:42',
        isLike: true,
        image: '/images/songs/anh-luon-la-li-do.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '9',
        name: 'Một người nhẹ nhàng hơn',
        artists: 'Trang, Tiên Tiên',
        time: '04:01',
        isLike: true,
        image: '/images/songs/mot-nguoi-nhe-nhang-hon.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '10',
        name: 'Missing You',
        artists: 'Phương Ly, TINLE',
        time: '04:03',
        isLike: true,
        image: '/images/songs/missing-you.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '11',
        name: 'Vì yêu cứ đâm đầu',
        artists: 'Min, Đen, Justatee',
        time: '03:51',
        isLike: true,
        image: '/images/songs/vi-yeu-cu-dam-dau.webp',
        isActive: false,
        isPlay: false,
    },
    {
        id: '12',
        name: 'Trời dấu trời mang đi (solo vesion)',
        artists: 'AMEE',
        time: '04:14',
        isLike: true,
        image: '/images/songs/troi-dau-troi-mang-di.webp',
        isActive: false,
        isPlay: false,
    },
];

const NAVS = [{ title: 'favorite' }, { title: 'uploaded' }];

const Song = () => {
    const [nav, setNav] = useState('favorite');

    return (
        <div>
            <div className={cx('btns')}>
                {NAVS.map((item, id) => (
                    <button
                        key={id}
                        onClick={() => setNav(item.title)}
                        className={cx('btn', { active: nav === item.title })}
                    >
                        {item.title}
                    </button>
                ))}
            </div>
            {nav === 'favorite' &&
                (SONGS.length <= 0 ? (
                    <EmptyContent type="song" message="No favorite songs in personal library yet!" />
                ) : (
                    <DragDropSongs list={SONGS} />
                ))}
            {nav === 'uploaded' && <EmptyContent type="upload" message="No songs uploaded in personal library yet!" />}
        </div>
    );
};

export default Song;
