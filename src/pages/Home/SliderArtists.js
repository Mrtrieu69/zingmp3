import React from 'react';
import classNames from 'classnames/bind';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './Home.module.scss';

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
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
        ],
    };

    return (
        <div>
            <Slider {...settings}>
                {ARTISTS.map((artist, id) => (
                    <div key={id}>
                        <div className={cx('artist-item')}>
                            <img className={cx('artist-img')} src={artist.image} alt="name" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={cx('arrow-next', className)} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={cx('arrow-prev', className)} onClick={onClick} />;
}

export default SliderArtists;
