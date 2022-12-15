import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const IMAGES = [
    { image: '/images/home/slider/0cc1db16659fb828bbee0784a2d43fc3.jpg' },
    { image: '/images/home/slider/7a870933fff21d555a4295d734df860a.jpg' },
    { image: '/images/home/slider/7d0356d6396046217231ad90888bc63e.jpg' },
    { image: '/images/home/slider/91926d3bf9503f49322f5950d91fcd71.jpg' },
    { image: '/images/home/slider/699664c5f32c456007c69eb19deb9e6a.jpg' },
    { image: '/images/home/slider/a34565642e37252696a4b04674200f11.jpg' },
];

const Slider = () => {
    const [currentImage, setCurrentImage] = useState(0);

    const timeRef = useRef();

    const handleNext = () => {
        if (currentImage >= IMAGES.length - 1) {
            setCurrentImage(0);
        } else {
            setCurrentImage(currentImage + 1);
        }
    };

    const handlePrev = () => {
        if (currentImage === 0) {
            setCurrentImage(IMAGES.length - 1);
        } else {
            setCurrentImage(currentImage - 1);
        }
    };

    useEffect(() => {
        timeRef.current = setTimeout(() => handleNext(), 4000);

        return () => {
            if (timeRef.current) {
                clearTimeout(timeRef.current);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImage]);

    return (
        <div className={cx('slider')}>
            <button onClick={handlePrev} className={cx('btn-prev')}>
                <AiOutlineArrowLeft />
            </button>
            <button onClick={handleNext} className={cx('btn-next')}>
                <AiOutlineArrowRight />
            </button>
            {IMAGES.map((item, id) => (
                <div
                    key={id}
                    className={cx(
                        'block',
                        { current: id === currentImage },
                        { prev: currentImage - 1 < 0 ? id === IMAGES.length - 1 : id === currentImage - 1 },
                        { next: currentImage + 1 >= IMAGES.length ? id === 0 : id === currentImage + 1 },
                    )}
                >
                    <img src={item.image} className={cx('image')} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Slider;
