import { useState, useEffect, createRef, useContext } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { toast } from 'react-toastify';

import styles from './Playlist.module.scss';
import {
    setSong,
    pause,
    play,
    startApp,
    setCurrentList,
    changePositionSong,
    likeSong,
    unlikeSong,
} from '../../features/music/musicSlice';
import Button from '../Button';
import { Context } from '../../context';

// icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdMoreHoriz } from 'react-icons/md';
import { BsMusicNoteBeamed, BsFillPlayFill } from 'react-icons/bs';
import { BiLoader } from 'react-icons/bi';

const cx = classNames.bind(styles);

const onDragEnd = (result, dispatch, idCurrentSong, idList, currentSong, setForceRerender) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.index === destination.index) return;

    dispatch(changePositionSong({ source, destination }));

    if (currentSong.type === idList) {
        if (source.index === idCurrentSong) {
            dispatch(setSong(destination.index));
        } else if (source.index < idCurrentSong && destination.index >= idCurrentSong) {
            dispatch(setSong(idCurrentSong - 1));
        } else if (source.index > idCurrentSong && destination.index <= idCurrentSong) {
            dispatch(setSong(idCurrentSong + 1));
        } else {
            dispatch(setSong(idCurrentSong));
        }
    }

    setForceRerender(false);
};

const Playlist = ({ songs }) => {
    const [songRefs, setSongRefs] = useState([]);

    const { forceRerender, setForceRerender } = useContext(Context);

    const { currentSong, isPlaying, isFirstStartApp, isLoadingData, currentList, idCurrentSong } = useSelector(
        (state) => state.music,
    );
    const favoriteSongs = useSelector((state) => state.music['favorite-songs']);
    const dispatch = useDispatch();
    let { idList } = useParams();

    if (!idList) {
        idList = 'favorite-songs';
    }

    const handlePlay = (index, type) => {
        dispatch(setCurrentList(type));
        dispatch(setSong(index));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }
    };

    const handlePause = () => {
        dispatch(pause());
    };

    const handleLike = (song) => {
        dispatch(likeSong(song));
        dispatch(setSong(idCurrentSong));
        setForceRerender(false);
        toast.success('Added to favorite songs!');
    };

    const handleUnlike = (song, index) => {
        if (currentList === 'favorite-songs' && favoriteSongs.length <= 1) {
            dispatch(setCurrentList('world-music'));
        }
        dispatch(unlikeSong(song));
        if (currentList === 'favorite-songs' && index < idCurrentSong && song.type === 'favorite') {
            dispatch(setSong(idCurrentSong - 1));
        } else {
            dispatch(setSong(idCurrentSong));
        }
        setForceRerender(false);
        toast.success('Removed from favorite songs!');
    };

    useEffect(() => {
        setForceRerender(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoadingData]);

    useEffect(() => {
        setSongRefs((refs) =>
            Array(songs?.length)
                .fill()
                .map((_, id) => refs[id] || createRef()),
        );
    }, [songs]);

    useEffect(() => {
        if (songRefs.length > 0 && idList === currentList && forceRerender) {
            songRefs[idCurrentSong]?.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [idCurrentSong, songRefs, idList, currentList, forceRerender, isLoadingData]);

    return (
        <div className={cx('list')}>
            <div className={cx('list-header')}>
                <span className={cx('list-text')}>Song</span>
                <span className={cx('list-time')}>Time</span>
            </div>
            <DragDropContext
                onDragEnd={(result) =>
                    onDragEnd(result, dispatch, idCurrentSong, idList, currentSong, setForceRerender)
                }
            >
                <Droppable droppableId={idList} key={idList}>
                    {(provided) => {
                        return (
                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                {songs.map((song, index) => (
                                    <Draggable key={song.id} draggableId={song.id} index={index}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    style={{
                                                        userSelect: 'none',
                                                        ...provided.draggableProps.style,
                                                    }}
                                                >
                                                    <div
                                                        key={song.id}
                                                        ref={songRefs[index]}
                                                        className={cx('media', {
                                                            active: index === idCurrentSong && currentList === idList,
                                                            dragging: snapshot.isDragging,
                                                        })}
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
                                                                <div className={cx('mask')}>
                                                                    {index === idCurrentSong && isLoadingData ? (
                                                                        <span className={cx('loader-icon')}>
                                                                            <BiLoader />
                                                                        </span>
                                                                    ) : isPlaying &&
                                                                      index === idCurrentSong &&
                                                                      currentList === idList ? (
                                                                        <span
                                                                            onClick={handlePause}
                                                                            className={cx('btn-pause')}
                                                                        >
                                                                            <span
                                                                                className={cx('pause-icon')}
                                                                                style={{
                                                                                    backgroundImage:
                                                                                        "url('/images/gif/icon-playing.gif')",
                                                                                }}
                                                                            ></span>
                                                                        </span>
                                                                    ) : (
                                                                        <span
                                                                            onClick={() => handlePlay(index, song.type)}
                                                                            className={cx('btn-play')}
                                                                        >
                                                                            <BsFillPlayFill />
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>
                                                            <div className={cx('song-info')}>
                                                                <span className={cx('song-name', 'line-clamp')}>
                                                                    {song.name}
                                                                </span>
                                                                <h3 className={cx('artists', 'line-clamp')}>
                                                                    {song.artists}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                        <div className={cx('media-time')}>{song.time}</div>
                                                        <div className={cx('controls')}>
                                                            {song.isLike ? (
                                                                <Button
                                                                    onClick={() => handleUnlike(song, index)}
                                                                    rounded
                                                                    icon={<AiFillHeart />}
                                                                    className={cx('icon', 'like')}
                                                                />
                                                            ) : (
                                                                <Button
                                                                    onClick={() => handleLike(song)}
                                                                    rounded
                                                                    icon={<AiOutlineHeart />}
                                                                    className={cx('icon')}
                                                                />
                                                            )}
                                                            <Button
                                                                rounded
                                                                icon={<MdMoreHoriz />}
                                                                className={cx('icon')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        </div>
    );
};

export default Playlist;
