import React from 'react';
import pkg from 'react-router-dom';
import type {IPropsLinkButton, IStateLinkButton} from './link.button.type';
import classNames from 'classnames';
import {baseEventHandler} from '@bases/base.utils';
import './_linkButton.scss'

const {Link} = pkg

export default class LinkButton extends React.Component<IPropsLinkButton, IStateLinkButton> {
    public constructor(props: IPropsLinkButton) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <Link
                to={this.props.to}
                title={this.props.title}
                target={this.props.target}
                className={classNames({'link-button-base': true, 'pressed-link': this.state.pressed})}
                style={this.props.style}
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
                onClick={this.props.onClick}
                onMouseOver={this.props.onMouseOver}
                onMouseEnter={this.props.onMouseEnter}
                onMouseLeave={this.props.onMouseLeave}
                onMouseOut={this.props.onMouseOut}
                onFocus={this.props.onFocus}
            >
                {this.props.children}
            </Link>
        );
    }
}
