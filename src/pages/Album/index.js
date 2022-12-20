import React from 'react';
import { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet-async';

import styles from './Album.module.scss';
import { Button, Playlist, AlbumItem } from '../../components';
import { Loader } from '../../components/Icons';
import { useTransitionShow } from '../../hooks';
import { play, pause, startApp, setCurrentList, setSong } from '../../features/music/musicSlice';
import { PLAYLISTS } from '../../data/playlists';

import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineUserAdd } from 'react-icons/ai';
import { FiMoreHorizontal } from 'react-icons/fi';

const cx = classNames.bind(styles);

const Album = () => {
    const { idList } = useParams();
    const listSongs = useSelector((state) => state.music[idList]);
    const { isPlaying, isFirstStartApp, currentList, idCurrentSong, isLoadingData } = useSelector(
        (state) => state.music,
    );
    const dispatch = useDispatch();

    const infoList = PLAYLISTS[idList];

    const recommendedList = Object.entries(PLAYLISTS).filter(([type, _]) => type !== idList);

    const { isTransition, isShow, setIsShow } = useTransitionShow(300);

    const handlePlay = () => {
        dispatch(setCurrentList(idList));
        dispatch(setSong(idCurrentSong));
        dispatch(play());
        if (isFirstStartApp) {
            dispatch(startApp());
        }
    };

    const handlePause = () => {
        dispatch(pause());
    };

    useEffect(() => {
        setIsShow(isPlaying);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

    return (
        <>
            <Helmet>
                <title>Album | {infoList.name}</title>
            </Helmet>

            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <div className={cx('media')}>
                        <div className={cx('sticky')}>
                            <figure
                                className={cx('media-left', {
                                    active: isPlaying && !isLoadingData && idList === currentList,
                                    'spin-off': isTransition && !isShow && idList === currentList,
                                })}
                            >
                                <img src={infoList.bgImage} className={cx('image')} alt="" />
                                {isLoadingData && idList === currentList ? (
                                    <div className={cx('mask')}>
                                        <div className={cx('loading')}>
                                            <Loader white />
                                        </div>
                                    </div>
                                ) : isPlaying && idList === currentList ? (
                                    <div onClick={handlePause} className={cx('mask')}>
                                        <span className={cx('play')}>
                                            <span
                                                style={{ backgroundImage: 'url("/images/gif/icon-playing.gif")' }}
                                                className={cx('pause-icon')}
                                            ></span>
                                        </span>
                                    </div>
                                ) : (
                                    <div onClick={handlePlay} className={cx('mask')}>
                                        <span className={cx('play')}>
                                            <BsPlayFill />
                                        </span>
                                    </div>
                                )}
                            </figure>
                            <div className={cx('media-right')}>
                                <div>
                                    <h3 className={cx('title')}>{infoList.name}</h3>
                                    <p className={cx('desc')}>Updated: {infoList.updated}</p>
                                    <p className={cx('desc')}>{infoList.artists}</p>
                                    <p className={cx('desc')}>{infoList.likes} likes</p>
                                </div>
                                <div className={cx('controls')}>
                                    {isPlaying && idList === currentList ? (
                                        <div onClick={handlePause} className={cx('control')}>
                                            <span className={cx('control-play')}>
                                                <BsPauseFill />
                                            </span>
                                            Tạm dừng
                                        </div>
                                    ) : (
                                        <div onClick={handlePlay} className={cx('control')}>
                                            <span className={cx('control-play')}>
                                                <BsPlayFill />
                                            </span>
                                            Tiếp tục phát
                                        </div>
                                    )}
                                    <div className={cx('actions')}>
                                        <Button className={cx('icon', 'active')} rounded icon={<AiFillHeart />} />
                                        <Button className={cx('icon')} rounded icon={<FiMoreHorizontal />} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('playlist')}>
                        <Playlist songs={listSongs} />
                    </div>
                </div>
                <div className={cx('section')}>
                    <h3 className={cx('title')}>Participating artists</h3>
                    <div className={cx('list')}>
                        {infoList.participants.map((participant, index) => (
                            <div key={index} className={cx('item')}>
                                <div className={cx('card')}>
                                    <a href="#1" className={cx('avatar')}>
                                        <img src={participant.image} alt="Phuc Du" />
                                    </a>
                                    <p className={cx('name')}>{participant.name}</p>
                                    <p className={cx('followers')}>{participant.followers} followers</p>
                                    <div className={cx('follow')}>
                                        <span className={cx('add')}>
                                            <AiOutlineUserAdd />
                                        </span>
                                        Follow
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('section')}>
                    <h3 className={cx('title')}>Recommended for you </h3>
                    <div className={cx('list')}>
                        {recommendedList.map(([_, item], index) => (
                            <AlbumItem showArtists key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Album;
