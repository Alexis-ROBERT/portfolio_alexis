import classNames from 'classnames';
import React from 'react';
import './_dropElement.scss';
import type {IPropsDropElement, IStateDropElement} from './drop.elesment.type';
import ButtonIcon from '../../bases/buttonIcon/button.icon';

export default class DropElement extends React.Component<IPropsDropElement, IStateDropElement> {
    public constructor(props: IPropsDropElement) {
        super(props);

        this.state = {
            pressed: false,
            destroy: false
        };
    }

    public render(): React.ReactNode {
        if (!this.state.destroy) {
            return (
                <div
                    className={classNames({
                        'drop-element-base': true,
                        'content-pressed': this.state.pressed,
                        [this.props.className || '']: this.props.className !== undefined,
                    })}
                >
                    <a
                        className={classNames({
                            'drop-element-link-base': true,
                            'link-pressed': this.state.pressed,
                        })}
                        title={this.props.title}
                        target={this.props.target}
                        style={{width: 'max-content', ...this.props.style}}
                        onMouseDown={() => {
                            this.setState({
                                pressed: true,
                            });
                        }}
                        onMouseUp={() => {
                            this.setState({
                                pressed: false,
                            });
                        }}
                        onBlur={() => {
                            this.setState({
                                pressed: false,
                            });
                        }}
                    >
                        {this.props.text}
                    </a>
                    <ButtonIcon className="drop-element-btn-close-base" src="../../assets/svg/close.svg" alt="Close"
                                size={15}
                                onClick={() => {
                                    this.setState({destroy: true})
                                }}/>
                </div>
            );
        }
    }
}
