import { useState } from 'react';
import * as React from 'react';
import { useTransition, animated } from 'react-spring';

import { useInterval } from '../../helpers/useInterval';
import Panel, { PanelProps } from '../Panel';
import './SlidesPanel.scss';

import prodriveLogo from './data/prodrive-logo.svg';
import letstalkLogo from './data/letstalk-logo.png';

export type SlidesPanelProps = PanelProps;

export default function SlidesPanel({ ...otherProps }: SlidesPanelProps) {
    const logos: string[] = [prodriveLogo, letstalkLogo];

    const [index, setIndex] = useState(0);
    useInterval(() => {
        setIndex((index) => (index + 1) % logos.length);
    }, 10000);

    const trans = useTransition(index, (p) => p, {
        initial: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    } as any);

    return (
        <Panel className="SlidesPanel">
            {trans.map(({ item, props, key }) => (
                <animated.div
                    key={key}
                    className="SlidesPanel__slide"
                    style={props}
                >
                    <img className="SlidesPanel__logo" src={logos[item]} />
                </animated.div>
            ))}
        </Panel>
    );
}
