import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';

import styles from './NowPlaylist.module.scss';

const cx = classNames.bind(styles);

const NowPlaylist = ({ isIdle }) => {
    const slider = useRef();
    const [currentSlide, setCurrentSlide] = useState();

    const idCurrentSong = 2;

    useEffect(() => {
        slider.current.slickGoTo(idCurrentSong);
    }, []);

    useEffect(() => {
        if (isIdle) {
            slider.current.slickGoTo(idCurrentSong);
        }
    }, [isIdle]);

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
        <div>
            <div className={cx('slider-block')}>
                <Slider ref={slider} {...settings}>
                    {Array(6)
                        .fill()
                        .map((_, id) => (
                            <div
                                key={id}
                                style={{ width: id === idCurrentSong ? 430 : 360 }}
                                className={cx('test', { active: idCurrentSong === id, current: id === currentSlide })}
                            >
                                <p>330</p>
                            </div>
                        ))}
                </Slider>
                <button className={cx('btn')}>Prev</button>
                <button className={cx('btn')}>Next</button>
            </div>
        </div>
    );
};

export default NowPlaylist;
