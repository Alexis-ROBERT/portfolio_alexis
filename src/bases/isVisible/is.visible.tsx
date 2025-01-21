import React from 'react';
import { IPropsIsVisible } from './is.visible.type';

export default class IsVisible extends React.Component<IPropsIsVisible> {
        public constructor(public props: IPropsIsVisible) {
                super(props);
        }

        private _isVisible(): React.ReactNode {
                if (this.props.visible) {
                        return this.props.children;
                }
        }

        public render(): React.ReactNode {
                return this._isVisible();
        }
}
