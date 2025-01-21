import React from 'react';
import type {IPropsButton, IStateButton} from './button.type';
import classNames from 'classnames';
import './_button.scss';
import {baseEventHandler} from '../base.utils';

export default class Button extends React.Component<IPropsButton, IStateButton> {
    public constructor(props: IPropsButton) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'button-base': true,
                    pressed: this.state.pressed,
                    [this.props.className || '']: this.props.className !== undefined,
                })}
                style={{...this.props.style}}
                onClick={this.props.onClick}
                onMouseUp={(event) => {
                    this.setState({
                        pressed: false,
                    });

                    baseEventHandler(event, this.props.onMouseUp);
                }}
                onMouseDown={(event) => {
                    this.setState({
                        pressed: true,
                    });

                    baseEventHandler(event, this.props.onMouseDown);
                }}
                onBlur={(event) => {
                    this.setState({
                        pressed: false,
                    });

                    baseEventHandler(event, this.props.onBlur);
                }}
                onMouseOver={this.props.onMouseOver}
                onMouseEnter={this.props.onMouseEnter}
                onMouseOut={this.props.onMouseOut}
                onMouseLeave={this.props.onMouseLeave}
                onFocus={this.props.onFocus}
            >
                {this.props.children}
            </button>
        );
    }
}
