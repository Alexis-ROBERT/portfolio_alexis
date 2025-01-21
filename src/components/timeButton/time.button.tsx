import React from 'react';
import { IPropsTimeButton, IStateTimeButton } from './time.button.type';
import classNames from 'classnames';
import './_timeButton.scss';
import { baseEventHandler } from '../../../../gui/bases/base.utils';

export default class TimeButton extends React.Component<IPropsTimeButton, IStateTimeButton> {
        private timeHandleEvent(time: number): void {
                setTimeout(() => {
                        time -= 1;

                        if (time === 0) {
                                this.setState({
                                        actived: true,
                                });

                                return;
                        }

                        this.setState({
                                newTime: time,
                        });

                        this.timeHandleEvent(time);
                }, 1000);
        }

        private _imageDisplay(): React.ReactNode {
                if (this.props.src) {
                        return <img className="time-button-image-base" src={this.props.src} alt={this.props.alt} />;
                }
        }

        private _displayTimeHandle(): React.ReactNode {
                if (!this.state.actived) {
                        if (this.props.wait) return <span>{this.props.textWait}</span>

                        if (this.props.textWait !== undefined) {
                                return (
                                        <>
                                                <span>{this.props.textWait}</span>
                                                <div className="time-button-separed-text" />
                                                <span>{this.state.newTime}</span>
                                        </>
                                );
                        }
                }

                return <span>{this.props.textActived}</span>;
        }

        public constructor(props: IPropsTimeButton) {
                super(props);

                this.state = {
                        pressed: false,
                        actived: false,
                        newTime: props.time,
                };
        }

        public componentDidMount(): void {
                this.timeHandleEvent(this.props.time);
        }

        public render(): React.ReactNode {
                return (
                        <button
                                className={classNames({
                                        'time-button-base': true,
                                        'actived-button-time': this.state.actived,
                                        'pressed-button-time': this.state.pressed,
                                })}
                                onMouseDown={(event) => {
                                        if (this.state.actived) {
                                                this.setState({
                                                        pressed: true,
                                                });
                                        }

                                        baseEventHandler(event, this.props.onMouseDown);
                                }}
                                onMouseUp={(event) => {
                                        if (this.state.actived) {
                                                this.setState({
                                                        pressed: false,
                                                });
                                        }

                                        baseEventHandler(event, this.props.onMouseUp);
                                }}
                                onBlur={(event) => {
                                        if (this.state.actived) {
                                                this.setState({
                                                        pressed: false,
                                                });
                                        }

                                        baseEventHandler(event, this.props.onBlur);
                                }}
                                onMouseEnter={this.props.onMouseEnter}
                                onMouseOut={this.props.onMouseOut}
                                onFocus={this.props.onFocus}
                                onClick={this.props.onClick}
                                onMouseLeave={this.props.onMouseLeave}
                        >
                                {this._displayTimeHandle()}
                                {this._imageDisplay()}
                        </button>
                );
        }
}
