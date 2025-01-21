import React from 'react';
import {Link} from 'react-router-dom';
import type {IPropsNavLink, IStateNavLink} from './nav.link.type';

export default class NavLink extends React.Component<IPropsNavLink, IStateNavLink> {
    public constructor(props: IPropsNavLink) {
        super(props);

        this.state = {
            actived: this._isActived(),
            hover: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <div className="nav-link-container">
                <img src='' alt='Arrow'/>
                <Link className={this.props.className} style={{...this.props.style}} to={this.props.to}
                      title={this.props.title}>
                    {this.props.children}
                </Link>
            </div>
        );
    }

    private _isActived(): boolean {
        if (this.props.to !== new URL(window.location.href).search) {
            return false;
        }

        return true;
    }
}
