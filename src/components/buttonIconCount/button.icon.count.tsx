import React from 'react';
import type {IPropsButtonIconCount, IStateButtonIconCount} from './button.icon.count.type';
import Icon from '@bases/icon/icon';
import classNames from 'classnames';
import './_buttonIconCount.scss';

export default class ButtonIconCount extends React.Component<IPropsButtonIconCount, IStateButtonIconCount> {
    public constructor(props: IPropsButtonIconCount) {
        super(props);

        this.state = {
            isCount: false,
            pressed: false
        };
    }

    public render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'button-icon-count-base': true,
                    'pressed-button-icon-count': this.state.pressed
                })}
                style={this.props.style}
                onMouseDown={() => {
                    this.setState({pressed: true});
                }}
                onMouseUp={() => {
                    this.setState({pressed: false});
                }}
                onBlur={() => {
                    this.setState({pressed: false});
                }}
                onClick={() => {
                    this.setState({isCount: !this.state.isCount});
                }}
            >
                                <span>
                                        <Icon src={this.props.src} alt={this.props.alt} size={25}/>
                                </span>
                <span>{this._countRender()}</span>
            </button>
        );
    }

    private _countRender(): React.ReactNode {
        if (this.state.isCount) return this.props.base + 1;
        return this.props.base;
    }
}
