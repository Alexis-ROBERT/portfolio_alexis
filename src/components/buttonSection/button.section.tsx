import React from 'react';
import classNames from 'classnames';
import type {IPropsButtonSection, IStateButtonSection} from './button.section.type';
import './_buttonSection.scss';
import {baseEventHandler} from '@bases/base.utils';

export default class ButtonSection extends React.Component<IPropsButtonSection, IStateButtonSection> {
    public constructor(props: IPropsButtonSection) {
        super(props);

        this.state = {
            pressed: false,
            actived: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <div>
                <button
                    className={classNames({
                        'button-section-base': true,
                        'pressed-btn-section': this.state.pressed,
                        'actived-btn-section': this.state.actived,
                    })}
                    style={{
                        width: this.props.size,
                        height: this.props.size,
                        borderRadius: this.props.size / 2, ...this.props.style
                    }}
                    type="button"
                    onMouseDown={(event) => {
                        this.setState({pressed: true, actived: true});
                        baseEventHandler(event, this.props.onMouseDown);
                    }}
                    onMouseUp={(event) => {
                        this.setState({pressed: false});
                        baseEventHandler(event, this.props.onMouseUp);
                    }}
                    onBlur={(event) => {
                        this.setState({pressed: false});
                        baseEventHandler(event, this.props.onBlur);
                    }}
                />
            </div>
        );
    }
}
