import React from 'react';
import type {IPropsIcon} from './icon.type';

export default class Icon extends React.Component<IPropsIcon> {
    public constructor(public props: IPropsIcon) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <img
                src={this.props.src}
                alt={this.props.alt}
                className={this.props.className}
                style={{...this.props.styles, width: this.props.size, height: this.props.size}}
            />
        );
    }
}
