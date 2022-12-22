import { forwardRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            className,
            bgImage,
            href,
            active,
            link,
            large,
            to,
            icon,
            iconLeft,
            iconRight,
            onClick: onClickBtn = () => {},
            children,
            rounded,
            size,
            primary,
            separate,
            ...passProps
        },
        ref,
    ) => {
        let Wrap = 'button';

        const onClick = (e) => {
            onClickBtn();

            e.preventDefault();
            e.stopPropagation();
        };

        const props = {
            onClick,
            ...passProps,
        };

        if (href) {
            Wrap = 'a';
            props.href = href;
        } else if (to) {
            Wrap = Link;
            props.to = to;
        }

        return (
            <Wrap
                {...props}
                className={cx('wrapper', {
                    [size]: size,
                    [className]: className,
                    rounded,
                    link,
                    active,
                    bgImage,
                    primary,
                })}
                ref={ref}
            >
                {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
                {icon && <span className={cx('icon')}>{icon}</span>}
                {children && (
                    <span className={cx('title')}>
                        {children}
                        {separate && <span className={cx('separate')}>{separate}</span>}
                    </span>
                )}
                {iconRight && <span className={cx('icon')}>{iconRight}</span>}
            </Wrap>
        );
    },
);

export default Button;
