import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import { Button, EmptyContent } from '../../../../components';
import styles from './Song.module.scss';

const cx = classNames.bind(styles);

const SONGS = [
    {
        id: '1',
        name: 'Từ thích thích thành thương thương',
        artists: 'AMEE, Hoàng dũng',
        time: '3:24',
        isLike: true,
        image: '/images/songs/tu-thich-thich-thanh-thuong-thuong.webp',
    },
    {
        id: '2',
        name: 'Em bỏ hút thuốc chưa?',
        artists: 'Bích Phương',
        time: '3:51',
        isLike: true,
        image: '/images/songs/em-bo-hut-thuoc-chua.webp',
    },
    {
        id: '3',
        name: 'Em là hoàng hôn',
        artists: 'Vang, Cloud 5',
        time: '3:43',
        isLike: true,
        image: '/images/songs/em-la-hoang-hon.webp',
    },
    {
        id: '4',
        name: 'Lose you',
        artists: 'T.R.I, Rickie',
        time: '3:35',
        isLike: true,
        image: '/images/songs/lose-you.webp',
    },
    {
        id: '5',
        name: 'Cần gì hơn',
        artists: 'Tiên Tiên, Justatee',
        time: '3:27',
        isLike: true,
        image: '/images/songs/can-gi-hon.webp',
    },
    {
        id: '6',
        name: 'Bông hoa chẳng thuộc về ta',
        artists: 'Như Việt',
        time: '3:36',
        isLike: true,
        image: '/images/songs/bong-hoa-chang-thuoc-ve-ta.webp',
    },
    {
        id: '7',
        name: 'Anh à',
        artists: 'Juky San, Thịnh Suy',
        time: '4:06',
        isLike: true,
        image: '/images/songs/anh-a.webp',
    },
];

const NAVS = [{ title: 'favorite' }, { title: 'uploaded' }];

const Song = () => {
    const [songs, setSongs] = useState(SONGS);
    const [nav, setNav] = useState('favorite');

    const handleDragEnd = (results) => {
        if (!results.destination) return;

        const newSongs = [...songs];
        const [reorderedItem] = newSongs.splice(results.source.index, 1);
        newSongs.splice(results.destination.index, 0, reorderedItem);

        setSongs(newSongs);
    };
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
                (songs.length <= 0 ? (
                    <EmptyContent type="song" message="No favorite songs in personal library yet!" />
                ) : (
                    <div className={cx('list')}>
                        <div className={cx('list-header')}>
                            <span className={cx('list-text')}>Song</span>
                            <span className={cx('list-time')}>Time</span>
                        </div>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="list">
                                {(provided) => (
                                    <div ref={provided.innerRef} {...provided.droppableProps}>
                                        {songs.map((song, id) => (
                                            <Draggable draggableId={song.id} key={song.id} index={id}>
                                                {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            className={cx('media', { dragging: snapshot.isDragging })}
                                                        >
                                                            <div className={cx('media-left')}>
                                                                <span className={cx('icon-music')}>
                                                                    <BsMusicNoteBeamed />
                                                                </span>
                                                                <div className={cx('block')}>
                                                                    <img
                                                                        src={song.image}
                                                                        className={cx('song-thumb')}
                                                                        alt="JD"
                                                                    />
                                                                    <span className={cx('mask')}>
                                                                        <BsFillPlayFill />
                                                                    </span>
                                                                </div>
                                                                <div className={cx('song-info')}>
                                                                    <span className={cx('song-name')}>{song.name}</span>
                                                                    <h3 className={cx('artists')}>{song.artists}</h3>
                                                                </div>
                                                            </div>
                                                            <div className={cx('media-time')}>{song.time}</div>
                                                            <div className={cx('controls')}>
                                                                <Button
                                                                    rounded
                                                                    icon={<AiFillHeart />}
                                                                    className={cx('icon', { like: song.isLike })}
                                                                />
                                                                <Button
                                                                    rounded
                                                                    icon={<MdMoreHoriz />}
                                                                    className={cx('icon')}
                                                                />
                                                            </div>
                                                        </div>
                                                    );
                                                }}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </div>
                ))}
            {nav === 'uploaded' && <EmptyContent type="upload" message="No songs uploaded in personal library yet!" />}
        </div>
    );
};

export default Song;
