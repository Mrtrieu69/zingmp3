import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import moment from 'moment';

import styles from './PlayerQueue.module.scss';
import { Modal } from '../../../components';

const cx = classNames.bind(styles);

const infoTimer = (value) => {
    const { minute, hour } = value;
    const date = Date.now();
    const dateToTimer = date + minute * 60 * 1000 + hour * 60 * 60 * 1000;
    const formatDateToTimer = moment(dateToTimer).format('HH:mm DD/MM/YYYY');

    return `Stop playing music at: ${formatDateToTimer}`;
};

const TimerSetting = ({ onClose }) => {
    const [value, setValue] = useState({ minute: 0, hour: 0 });

    const hourRef = useRef();
    const minuteRef = useRef();

    const handleChange = (e) => {
        if (Number(e.target.value) || Number(e.target.value) === 0) {
            if (e.target.name === 'hour' && (Number(e.target.value) < 0 || Number(e.target.value) > 24)) return;
            if (e.target.name === 'minute' && (Number(e.target.value) < 0 || Number(e.target.value) > 60)) return;

            setValue((prev) => ({ ...prev, [e.target.name]: Number(e.target.value) }));
        }
    };

    const handleSaveTimer = () => {};

    return (
        <Modal timer onClose={onClose}>
            <div className={cx('timer-body')}>
                <h3 className={cx('timer-title')}>Timer to stop playing music</h3>
                <div className={cx('settings')}>
                    <div className={cx('setting')}>
                        <div className={cx('setting-input')}>
                            <input
                                autoComplete="off"
                                ref={hourRef}
                                type="text"
                                value={value.hour}
                                name="hour"
                                onChange={handleChange}
                            />
                            <span className={cx('setting-label')}>Hour</span>
                        </div>
                        <div className={cx('device')}></div>
                    </div>
                    <span className={cx('dot')}>:</span>
                    <div className={cx('setting')}>
                        <div className={cx('setting-input')}>
                            <input
                                autoComplete="off"
                                ref={minuteRef}
                                type="text"
                                value={value.minute}
                                name="minute"
                                onChange={handleChange}
                            />
                            <span className={cx('setting-label')}>Minute</span>
                        </div>
                        <div className={cx('device')}></div>
                    </div>
                </div>
                <p className={cx('timer-subtitle')}>
                    {value.hour === 0 && value.minute === 0
                        ? 'Enter time to stop playing music'
                        : `${infoTimer(value)}`}
                </p>
                <button onClick={handleSaveTimer} className={cx('save')}>
                    SAVE
                </button>
                <button onClick={onClose} className={cx('exit')}>
                    EXIT
                </button>
            </div>
        </Modal>
    );
};

export default TimerSetting;
