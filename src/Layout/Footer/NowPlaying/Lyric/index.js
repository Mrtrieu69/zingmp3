import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import styles from './Lyric.module.scss';

const cx = classNames.bind(styles);

const Lyric = () => {
    const { currentSong, isPlaying } = useSelector((state) => state.music);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('song')}>
                <div className={cx('card')}>
                    <figure className={cx('thumb-block')}>
                        <img src={currentSong.thumb} alt="" className={cx('thumb')} />
                        {isPlaying && (
                            <span
                                className={cx('pause-icon')}
                                style={{
                                    backgroundImage: "url('/images/gif/icon-playing.gif')",
                                }}
                            ></span>
                        )}
                    </figure>
                </div>
            </div>
            <div className={cx('lyric-block')}>
                <div className={cx('lyric')}>
                    <div className={cx('line', 'over')}>Mà chẳng biết đang ở đâu</div>
                    <div className={cx('line', 'over')}>Em đang đắm chìm trong quá khứ</div>
                    <div className={cx('line', 'active')}>Còn nhiều điều em muốn giữ</div>
                    <div className={cx('line')}>Chờ một cuộc tình đã mất từ lâu</div>
                    <div className={cx('line')}>Chờ một kỉ niệm đã lỡ nhạt màu</div>
                    <div className={cx('line')}>Còn lại điều gì</div>
                </div>
            </div>
        </div>
    );
};

export default Lyric;
