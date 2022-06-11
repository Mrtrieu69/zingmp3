import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import styles from './DragDropSongs.module.scss';
import Button from '../Button';

const cx = classNames.bind(styles);

const DragDropSongs = ({ list, onPlay, onLike }) => {
    const [songs, setSongs] = useState(list);

    const handleDragEnd = (results) => {
        if (!results.destination) return;

        const newSongs = [...songs];
        const [reorderedItem] = newSongs.splice(results.source.index, 1);
        newSongs.splice(results.destination.index, 0, reorderedItem);

        setSongs(newSongs);
    };

    return (
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
                                                            alt={song.name}
                                                        />
                                                        <span onClick={onPlay} className={cx('mask')}>
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
                                                        onClick={onLike}
                                                        rounded
                                                        icon={song.isLike ? <AiFillHeart /> : <AiOutlineHeart />}
                                                        className={cx('icon', { like: song.isLike })}
                                                    />
                                                    <Button rounded icon={<MdMoreHoriz />} className={cx('icon')} />
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
    );
};

export default DragDropSongs;
