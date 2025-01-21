import classNames from 'classnames';
import React from 'react';
import { IPropsScrollZone } from './scroll.zone.type';
import './_scrollZone.scss';

export default class ScrollZone extends React.Component<IPropsScrollZone> {
        public constructor(props: IPropsScrollZone) {
                super(props);
        }

        public render(): React.ReactNode {
                return (
                        <div className={classNames({ 'scroll-zone-base': true })} style={{ display: this.props.display, ...this.props.style }}>
                                {this.props.children}
                        </div>
                );
        }
}
