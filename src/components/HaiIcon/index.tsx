// @ts-ignore
import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import JpIcon from './jp.svg';
import UkIcon from './uk.svg';

const ICON_ASSETS: Record<string, any> = {
    jp: JpIcon,
    uk: UkIcon,
};

interface Props {
    name: string;
}

export function HaiIcon({name}: Props): JSX.Element {
    const src = ICON_ASSETS[name];
    if (!src) {
        return <span>[{name}]</span>;
    }

    if (typeof src === 'function' || (typeof src === 'object' && src !== null && src.$$typeof)) {
        const Svg = src;
        return (
            <span className={clsx(styles.hai_icon)} role="img" aria-label={name}>
                <Svg />
            </span>
        );
    }

    return (
        <span
            className={clsx(styles.hai_icon)}
            role="img"
            aria-label={name}
            style={{ backgroundImage: `url(${src})` }}
        />
    );
}
