import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';

import styles from './Radio.module.scss';
import { LIVE_STREAM } from '../../data/radio';
import { Button } from '../../components';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { BsPlayCircle } from 'react-icons/bs';

const cx = classNames.bind(styles);

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
            },
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
            },
        },
    ],
};

const LiveStream = () => {
    const sliderRef = useRef();

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className={cx('container')}>
            <div className={cx('header')}>
                <h3 className={cx('title')}>Top Radio</h3>
                <div className={cx('actions')}>
                    <Button
                        rounded
                        size="medium"
                        className={cx('action')}
                        onClick={handlePrev}
                        icon={<IoIosArrowBack />}
                    />
                    <Button
                        rounded
                        size="medium"
                        onClick={handleNext}
                        className={cx('action')}
                        icon={<IoIosArrowForward />}
                    />
                </div>
            </div>
            <Slider ref={sliderRef} className={cx('live-stream-slider')} {...settings}>
                {LIVE_STREAM.map((item) => (
                    <div key={item.id} className={cx('slider-item')}>
                        <div className={cx('slider-card')}>
                            <div className={cx('slider-content-block')}>
                                <div className={cx('slider-content')}>
                                    <img src={item.host.thumbnail} alt="" className={cx('slider-image')} />
                                    <div className={cx('slider-play')}>
                                        <BsPlayCircle />
                                    </div>
                                    <img src={item.thumbnail} alt="" className={cx('slider-thumb')} />
                                </div>
                                <p className={cx('slider-live')}>Live</p>
                            </div>
                            <h3 className={cx('slider-item-title')}>{item.host.name}</h3>
                            <p className={cx('slider-active-users', 'line-clamp')}>{item.activeUsers} listening</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LiveStream;
