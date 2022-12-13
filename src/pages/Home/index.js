import React from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';

import styles from './Home.module.scss';
import Slider from './Slider';
import { Button } from '../../components';
import ZingChart from './ZingChart';
import TypeSongs from './TypeSongs';
import SliderArtists from './SliderArtists';
import Mixtape from './Mixtape';
import Event from './Event';
import Partner from './Partner';
import PlaylistItem from './PlaylistItem';

const cx = classNames.bind(styles);

const PLAYLIST = [
    {
        name: 'World',
        image: "url('/images/album/album2.jpg')",
        subTitle: 'Zing mp3',
        isLike: true,
        path: 'mymusic/world-music',
        type: 'world-music',
    },
    {
        name: 'Playlist này chill phết',
        image: "url('/images/album/album1.webp')",
        subTitle: 'Zing mp3',
        isLike: true,
        path: 'mymusic/playlist-chill',
        type: 'playlist-chill',
    },
    {
        name: 'chill hits',
        image: "url('/images/album/album3.webp')",
        subTitle: 'Zing mp3',
        isLike: true,
        path: 'mymusic/chill-hits',
        type: 'chill-hits',
    },
];

const LIST = [
    {
        title: 'Maybe you want to hear',
        subList: [
            {
                name: 'Remix việt hay nhất',
                artists: 'Huyền tân Môn, Tăng Duy Tân, Orange...',
                image: 'url(/images/playlist/remix-viet-hay-nhat.webp)',
            },
            {
                name: 'Catchy tune',
                artists: 'AMEE, Hoàng Thỳ linh, MIN...',
                image: 'url(/images/playlist/catchy-tune.webp)',
            },
            {
                name: 'Bụi đời rap việt',
                artists: 'Hồ Quang Hiếu, Wowy, MPaKK...',
                image: 'url(/images/playlist/bui-doi-rap-viet.webp)',
            },
            {
                name: 'EDM việt gây nghiện',
                artists: 'K-ICM, Touliver, Hoaprox...',
                image: 'url(/images/playlist/EDM-viet-gay-nghien.webp)',
            },
            {
                name: 'Ký ức V-Pop',
                artists: 'Ưng Hoàng Phúc, Phạm Quỳnh Anh, Duy Mạnh...',
                image: 'url(/images/playlist/ky-uc-v-pop.webp)',
            },
        ],
    },
    {
        title: "XONE's CORNER",
        subList: [
            {
                name: 'Coffe with buddies',
                artists: 'Những bài nhạc nhẹ nhàng và trong trẻo',
                image: 'url(/images/playlist/coffe-with-buddies.webp)',
            },
            {
                name: 'Hiphop and the hype',
                artists: 'Những track hiphop nhiệt nhất khi nghe cùng homies',
                image: 'url(/images/playlist/hiphop-and-the-hype.webp)',
            },
            {
                name: 'USUK get the heat',
                artists: 'Một chút âm nhạc sôi động, nóng bỏng cho mùa hè nào',
                image: 'url(/images/playlist/get-the-heat.webp)',
            },
            {
                name: 'K-Pop in my eyes',
                artists: 'Chỉ cần vài giây bạn biết bài K-Pop nào rồi',
                image: 'url(/images/playlist/korea-in-my-eyes.webp)',
            },
            {
                name: 'V-Pop hey ưedding',
                artists: 'Ở đây có V-Pop nghe là muốn cưới, bạn thử xem',
                image: 'url(/images/playlist/hey-wedding.webp)',
            },
        ],
    },
];

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Slider />
            <div className={cx('container', 'separate')}>
                <div className={cx('title')}>Recently</div>
                <div className={cx('playlists')}>
                    {PLAYLIST.map((item, id) => (
                        <PlaylistItem key={id} {...item} />
                    ))}
                </div>
            </div>
            {LIST.map((item, id) => (
                <div key={id} className={cx('container')}>
                    <div className={cx('title')}>{item.title}</div>
                    <div className={cx('list')}>
                        {item.subList.map((subItem, index) => (
                            <div key={index} className={cx('item')}>
                                <div style={{ backgroundImage: subItem.image }} className={cx('card')}>
                                    <div className={cx('layout')}>
                                        <Button
                                            icon={item.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                                            rounded
                                            className={cx('icon', { like: item.isLike })}
                                        />
                                        <Button icon={<BsPlayFill />} rounded className={cx('icon', 'icon-play')} />
                                        <Button icon={<MdMoreHoriz />} rounded className={cx('icon')} />
                                    </div>
                                </div>
                                <h4 className={cx('name')}>{subItem.name}</h4>
                                <p className={cx('artists')}>{subItem.artists}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <ZingChart />
            <TypeSongs />
            <SliderArtists />
            <Mixtape />
            <Event />
            <Partner />
        </div>
    );
};

export default Home;
