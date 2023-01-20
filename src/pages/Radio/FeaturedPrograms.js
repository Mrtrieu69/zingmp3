import classNames from 'classnames/bind';
import { useRef } from 'react';
import Slider from 'react-slick';

import { Button } from '../../components';
import styles from './Radio.module.scss';

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FEATURED_PROGRAMS } from '../../data/radio';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            },
        },
    ],
};

const cx = classNames.bind(styles);

const FeaturedPrograms = () => {
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
                <h3 className={cx('title')}>Featured Programs</h3>
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
            <Slider ref={sliderRef} className={cx('programs')} {...settings}>
                {FEATURED_PROGRAMS.map((item) => (
                    <div key={item.encodeId} className={cx('programs-item')}>
                        <div className={cx('program-card')}>
                            <div
                                className={cx('cover')}
                                style={{
                                    backgroundImage: `url(${item.thumbnailM})`,
                                }}
                            ></div>
                            <div className={cx('program-thumb')}>
                                <img src={item.thumbnailM} alt="" />
                            </div>
                            <div className={cx('program-info')}>
                                <p className={cx('program-host')}>{item.artists[0].name}</p>
                                <h3 className={cx('program-title', 'line-clamp')}>{item.title}</h3>
                                <p className={cx('program-desc', 'line-clamp')}>{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default FeaturedPrograms;
