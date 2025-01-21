import React from 'react';
import type {IPropsButtonIcon, IStateButtonIcon} from './button.icon.type';
import Icon from '../icon/icon';
import classNames from 'classnames';
import {baseEventHandler} from '../base.utils';
import './_buttonIcon.scss';

export default class ButtonIcon extends React.Component<IPropsButtonIcon, IStateButtonIcon> {
    public constructor(props: IPropsButtonIcon) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'button-icon-base': true,
                    'pressed-btn-icon': this.state.pressed,
                    [this.props.className || '']: this.props.className !== undefined,
                })}
                style={{width: this.props.size, height: this.props.size, ...this.props.style}}
                onMouseDown={(event) => {
                    this.setState({pressed: true});
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
                onFocus={this.props.onFocus}
                onClick={this.props.onClick}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onMouseOut={this.props.onMouseOut}
                onMouseOver={this.props.onMouseOver}
            >
                <Icon className="button-icpn-close-base" src={this.props.src} alt={this.props.alt} size={15}/>
            </button>
        );
    }
}
