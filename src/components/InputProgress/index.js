import React, { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './InputProgress.module.scss';

const cx = classNames.bind(styles);

const InputProgress = forwardRef(({ className, initialValue, ...passProps }, ref) => {
    return (
        <div className={cx('progress')}>
            <input
                ref={ref}
                className={cx('input-progress', { [className]: className })}
                type="range"
                {...passProps}
                min="0"
                max="100"
                step="1"
                style={{
                    background: `linear-gradient(90deg, var(--progressbar-active-bg) ${initialValue}%, var(--progressbar-player-bg) ${initialValue}%)`,
                }}
            />
        </div>
    );
});

export default InputProgress;
