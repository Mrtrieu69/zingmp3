import React from 'react';
import { useRef } from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Home.module.scss';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';

const cx = classNames.bind(styles);

const ARTISTS = [
    { image: '/images/home/artists/chi-dan.png' },
    { image: '/images/home/artists/duc-phuc.png' },
    { image: '/images/home/artists/erik.png' },
    { image: '/images/home/artists/hoa-minzy.png' },
    { image: '/images/home/artists/huong-ly.png' },
    { image: '/images/home/artists/jack.png' },
    { image: '/images/home/artists/justatee.png' },
    { image: '/images/home/artists/karik.png' },
    { image: '/images/home/artists/mr-siro.png' },
    { image: '/images/home/artists/onlyc.png' },
    { image: '/images/home/artists/trinh-thanh-binh.png' },
];

const SliderArtists = () => {
    const settings = {
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 1350,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                },
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                },
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
        ],
    };

    const slider = useRef();

    return (
        <div className={cx('artist-wrapper')}>
            <Slider ref={slider} className={cx('artists-slider')} {...settings}>
                {ARTISTS.map((artist, id) => (
                    <div key={id}>
                        <div className={cx('artist-item')}>
                            <img className={cx('artist-img')} src={artist.image} alt="name" />
                        </div>
                    </div>
                ))}
            </Slider>
            <button onClick={() => slider.current.slickPrev()} className={cx('arrow-prev')}>
                <GrFormPrevious />
            </button>
            <button onClick={() => slider.current.slickNext()} className={cx('arrow-next')}>
                <GrFormNext />
            </button>
        </div>
    );
};

export default SliderArtists;
