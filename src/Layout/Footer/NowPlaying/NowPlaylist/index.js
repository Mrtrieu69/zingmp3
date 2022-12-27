import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import Slider from 'react-slick';

import styles from './NowPlaylist.module.scss';
import { Tippy } from '../../../../components';
import { setSong, play, pause, likeSong, setCurrentList, unlikeSong } from '../../../../features/music/musicSlice';

// icons
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { MdMoreHoriz } from 'react-icons/md';

const cx = classNames.bind(styles);

const NowPlaylist = ({ isIdle }) => {
    const { idCurrentSong, isPlaying, currentList } = useSelector((state) => state.music);
    const { listSongs, favoriteSongs } = useSelector((state) => ({
        listSongs: state.music[state.music.currentList],
        favoriteSongs: state.music['favorite-songs'],
    }));
    const dispatch = useDispatch();

    const slider = useRef();
    const [currentSlide, setCurrentSlide] = useState(null);

    const handleLike = (song) => {
        dispatch(likeSong(song));
        dispatch(setSong(idCurrentSong));
        toast.success('Added to favorite songs!');
    };

    const handleUnlike = (song) => {
        if (currentList === 'favorite-songs' && favoriteSongs.length <= 1) {
            dispatch(setCurrentList('world-music'));
        }
        dispatch(unlikeSong(song));

        // keep playing current song
        const indexInFavoriteSongs = favoriteSongs.findIndex((item) => item.id === song.id);
        if (currentList === 'favorite-songs' && indexInFavoriteSongs < idCurrentSong) {
            dispatch(setSong(idCurrentSong - 1));
        } else {
            dispatch(setSong(idCurrentSong));
        }
        toast.success('Removed from favorite songs!');
    };

    const handlePlay = (index) => {
        dispatch(setSong(index));
        dispatch(play());
    };

    const handlePause = () => {
        dispatch(pause());
    };

    useEffect(() => {
        slider.current.slickGoTo(idCurrentSong);
        setCurrentSlide(idCurrentSong);
    }, [idCurrentSong]);

    useEffect(() => {
        if (isIdle) {
            slider.current.slickGoTo(idCurrentSong);
        }
    }, [isIdle, idCurrentSong]);

    useEffect(() => {
        const slickTrack = document.querySelector('.slick-track');
        if (slickTrack) {
            if (listSongs.length <= 1) {
                slickTrack.style.justifyContent = 'center';
            } else {
                slickTrack.style.justifyContent = 'flex-start';
            }
        }
    }, [listSongs]);

    const settings = {
        className: 'slider variable-width',
        dots: false,
        infinite: false,
        centerMode: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        variableWidth: true,
        afterChange: (current) => setCurrentSlide(current),
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('slider-block', { 'is-idle': isIdle })}>
                {listSongs.length > 1 && (
                    <>
                        <button onClick={() => slider.current.slickPrev()} className={cx('btn', 'prev')}>
                            <AiOutlineArrowLeft />
                        </button>
                        <button onClick={() => slider.current.slickNext()} className={cx('btn', 'next')}>
                            <AiOutlineArrowRight />
                        </button>
                    </>
                )}
                <Slider ref={slider} {...settings}>
                    {listSongs.map((song, id) => (
                        <div key={id} style={{ width: id === idCurrentSong ? 432 : 362 }} className={cx('card')}>
                            <div
                                className={cx('content', {
                                    'now-playing': idCurrentSong === id,
                                    current: currentSlide === id,
                                })}
                            >
                                <figure className={cx('figure')}>
                                    <img src={song.thumb} alt="" className={cx('image')} />
                                </figure>
                                <div className={cx('mask')}>
                                    {song.isLike ? (
                                        <Tippy title={'Remove from favorite songs'}>
                                            <span onClick={() => handleUnlike(song)} className={cx('action', 'active')}>
                                                <AiFillHeart />
                                            </span>
                                        </Tippy>
                                    ) : (
                                        <Tippy title="Add to favorite songs">
                                            <span onClick={() => handleLike(song)} className={cx('action')}>
                                                <AiOutlineHeart />
                                            </span>
                                        </Tippy>
                                    )}
                                    {isPlaying && idCurrentSong === id ? (
                                        <span onClick={handlePause} className={cx('toggle-play')}>
                                            <BsPauseFill />
                                        </span>
                                    ) : (
                                        <span onClick={() => handlePlay(id)} className={cx('toggle-play')}>
                                            <BsPlayFill />
                                        </span>
                                    )}
                                    <span className={cx('action')}>
                                        <MdMoreHoriz />
                                    </span>
                                </div>
                                {isPlaying && idCurrentSong === id && (
                                    <span
                                        className={cx('playing-icon')}
                                        style={{
                                            backgroundImage: "url('/images/gif/icon-playing.gif')",
                                        }}
                                    ></span>
                                )}
                                <div className={cx('info')}>
                                    <h3 className={cx('title', 'line-clamp')}>{song.name}</h3>
                                    <h3 className={cx('artists', 'line-clamp')}>{song.artists}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default NowPlaylist;
