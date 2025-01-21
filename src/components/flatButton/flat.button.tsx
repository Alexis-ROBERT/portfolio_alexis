import React from 'react';
import classNames from 'classnames';
import type {IPropsFlatButton, IStateFlatButton} from './flat.button.type';
import {baseEventHandler} from '../../bases/base.utils';
import './_flatButton.scss'

export default class FlatButton extends React.Component<IPropsFlatButton, IStateFlatButton> {
    public constructor(props: IPropsFlatButton) {
        super(props);

        this.state = {
            pressed: false,
            actived: props.actived || false,
        };
    }

    public render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'flat-button-base': true,
                    actived: this.state.actived,
                    'pressed-switch-btn': this.state.pressed,
                })}
                style={this.props.style}
                onMouseDown={(event) => {
                    this.setState({
                        pressed: true,
                        actived: true,
                    });

                    baseEventHandler(event, this.props.onMouseDown);
                }}
                onMouseUp={(event) => {
                    this.setState({
                        pressed: false,
                    });

                    baseEventHandler(event, this.props.onMouseUp);
                }}
                onBlur={(event) => {
                    this.setState({
                        pressed: false,
                    });

                    baseEventHandler(event, this.props.onBlur);
                }}
                onFocus={this.props.onFocus}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onMouseOut={this.props.onMouseOut}
                onMouseOver={this.props.onMouseOut}
            />
        );
    }
}
