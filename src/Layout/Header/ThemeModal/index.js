import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';
import { FcShop } from 'react-icons/fc';
import classNames from 'classnames/bind';

import styles from './ThemeModal.module.scss';
import { Button } from '../../../components';
import { displayThemes } from '../../../data/themes';
import themes from '../../../utils/themes';

const cx = classNames.bind(styles);

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        maxWidth: '900px',
        backgroundColor: 'var(--primary-bg)',
        borderRadius: '8px',
        padding: '0 0 20px 0',
        border: 'none',
        overflow: 'hidden',
        height: '596px',
    },
    overlay: {
        backgroundColor: 'var(--dark-alpha-50)',
        zIndex: '999',
    },
};

const ThemeModal = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [currentTheme, setCurrentTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'purple');
    const [reviewTheme, setReviewTheme] = useState(JSON.parse(localStorage.getItem('theme')) || 'purple');

    const colors = themes[reviewTheme];

    useEffect(() => {
        document.body.style.cssText = `
            --primary-bg: ${colors['--primary-bg']};
            --layout-bg: ${colors['--layout-bg']};
            --sidebar-bg: ${colors['--sidebar-bg']};
            --sidebar-popup-bg: ${colors['--sidebar-popup-bg']};
            --alpha-bg: ${colors['--alpha-bg']};
            --banner-home-dot: ${colors['--banner-home-dot']};
            --loading-bg: ${colors['--loading-bg']};
            --loading-bg-animation: ${colors['--loading-bg-animation']};
            --scroll-thumb-bg: ${colors['--scroll-thumb-bg']};
            --no-content-bg: ${colors['--no-content-bg']};
            --alpha-layout-bg: ${colors['--alpha-layout-bg']};
            --queue-player-popup-bg: ${colors['--queue-player-popup-bg']};
            --player-bg: ${colors['--player-bg']};
            --progressbar-player-bg: ${colors['--progressbar-player-bg']};
            --progressbar-active-bg: ${colors['--progressbar-active-bg']};
            --tab-active-bg: ${colors['--tab-active-bg']};
            --text-primary: ${colors['--text-primary']};
            --text-secondary: ${colors['--text-secondary']};
            --purple-primary: ${colors['--purple-primary']};
            --link-text-hover: ${colors['--link-text-hover']};
            --text-item-hover: ${colors['--text-item-hover']};
            --player-text: ${colors['--player-text']};
            --search-text: ${colors['--search-text']};
            --text-placeholder: ${colors['--text-placeholder']};
            --navigation-text: ${colors['--navigation-text']};
            --border-primary: ${colors['--border-primary']};
            --border-secondary: ${colors['--border-secondary']};
            --border-box: ${colors['--border-box']};
            --border-player: ${colors['--border-player']};
            background-image: ${colors['background-image']};
            --sticky-header-box-shadow: ${colors['--sticky-header-box-shadow']};
            --hover-tooltip-opacity: ${colors['--hover-tooltip-opacity']};
            --empty-album-icon: ${colors['--empty-album-icon']};
            --empty-podcast-icon: ${colors['--empty-podcast-icon']};
            --empty-song-icon: ${colors['--empty-song-icon']};
            --empty-upload-icon: ${colors['--empty-upload-icon']};
            --empty-mv-icon: ${colors['--empty-mv-icon']};
            --linear-gradient-bg: ${colors['--linear-gradient-bg']};
            --chart-bg-img-alpha: ${colors['--chart-bg-img-alpha']};
            --chart-box-bg-alpha: ${colors['--chart-box-bg-alpha']};
        `;

        const miniPlayer = document.querySelector('#mini-player');
        const weekBg = document.querySelector('#week-chart');

        if (colors['--mini-background-player']) {
            miniPlayer.style.backgroundImage = colors['--mini-background-player'];
        } else {
            miniPlayer.style.backgroundImage = 'none';
        }

        if (weekBg) {
            if (colors['--has-week-chart-bg']) {
                weekBg.style.backgroundImage = colors['--has-week-chart-bg'];
            } else {
                weekBg.style.backgroundImage = 'none';
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentTheme, reviewTheme]);

    const handleSetCurrentTheme = (theme) => {
        localStorage.setItem('theme', JSON.stringify(theme));
        setCurrentTheme(theme);
        setReviewTheme(theme);
        setIsOpen(false);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setReviewTheme(currentTheme);
    };
    return (
        <>
            <Button onClick={openModal} className={cx('btn-modal')} rounded size="medium" icon={<FcShop />} />
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Modal">
                <span className={cx('close')} onClick={closeModal}>
                    <AiOutlineClose />
                </span>
                <h3 className={cx('title')}>Display</h3>
                <div className={cx('content')}>
                    {displayThemes.map((displayTheme, id) => (
                        <div key={id} className={cx('display')}>
                            <h3 className={cx('sub-title')}>{displayTheme.title}</h3>
                            <div className={cx('themes')}>
                                {displayTheme.themes.map((theme, id) => (
                                    <div key={id} className={cx('body')}>
                                        <div
                                            className={cx('theme', { active: currentTheme === theme.nameTheme })}
                                            style={{
                                                backgroundImage: theme.image,
                                            }}
                                        >
                                            <div className={cx('border')}></div>
                                            <div className={cx('current')}>
                                                <AiOutlineCheck />
                                            </div>
                                            <div className={cx('action')}>
                                                <Button
                                                    onClick={() => handleSetCurrentTheme(theme.nameTheme)}
                                                    primary
                                                    size="small"
                                                    className={cx('apply')}
                                                >
                                                    APPLY
                                                </Button>
                                                <Button
                                                    onClick={() => setReviewTheme(theme.nameTheme)}
                                                    primary
                                                    size="small"
                                                    className={cx('try')}
                                                >
                                                    TRY
                                                </Button>
                                            </div>
                                        </div>
                                        <p className={cx('name')}>{theme.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Modal>
        </>
    );
};

export default ThemeModal;
