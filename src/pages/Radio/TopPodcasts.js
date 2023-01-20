import classNames from 'classnames/bind';
import moment from 'moment';

import styles from './Radio.module.scss';
import { Button, Tippy } from '../../components';
import { TOP_PODCASTS } from '../../data/radio';

import { BsFillPlayFill } from 'react-icons/bs';
import { MdMoreHoriz, MdBookmarkBorder } from 'react-icons/md';

const cx = classNames.bind(styles);

const TopPodcasts = () => {
    const topPodcastsFirst = TOP_PODCASTS.slice(0, 3);
    const topPodcastsSecond = TOP_PODCASTS.slice(3, 6);

    const topPodcasts = [topPodcastsFirst, topPodcastsSecond];

    return (
        <div className={cx('container')}>
            <h3 className={cx('title')}>Podcast Rankings</h3>
            <div className={cx('podcasts')}>
                {topPodcasts.map((list, id) => (
                    <div key={id} className={cx('podcast-column')}>
                        <div className={cx('podcast-list')}>
                            {list.map((item, index) => (
                                <div key={item.encodeId} className={cx('podcast-item')}>
                                    <p className={cx('podcast-ranking')}>{index + 1 + id * 3}</p>
                                    <div className={cx('podcast-thumb')}>
                                        <img src={item.thumbnail} alt={item.title} />
                                        <div className={cx('podcast-play')}>
                                            <BsFillPlayFill />
                                        </div>
                                    </div>
                                    <div className={cx('podcast-body')}>
                                        <p className={cx('podcast-title', 'line-clamp')}>{item.title}</p>
                                        <p className={cx('podcast-desc', 'line-clamp')}>
                                            <a href="#1">{item.album.title}</a>
                                        </p>
                                        <span className={cx('podcast-time')}>
                                            {moment(item.releaseDate * 1000).format('DD/MM/YYYY')}
                                        </span>
                                        <span>{Math.floor(item.duration / 60)} minutes</span>
                                    </div>
                                    <div className={cx('podcast-actions')}>
                                        <Tippy title={'Add to library'}>
                                            <Button
                                                rounded
                                                size="medium"
                                                className={cx('podcast-action')}
                                                icon={<MdBookmarkBorder />}
                                            />
                                        </Tippy>
                                        <Tippy title={'More'}>
                                            <Button
                                                rounded
                                                className={cx('podcast-action')}
                                                size="medium"
                                                icon={<MdMoreHoriz />}
                                            />
                                        </Tippy>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopPodcasts;
