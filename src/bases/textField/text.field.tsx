import React from 'react';
import { IPropsTextField, IStateTextField } from './text.field.type';
import classNames from 'classnames';
import './_textField.scss';
import { baseEventHandler } from '../base.utils';

export default class TextField extends React.Component<IPropsTextField, IStateTextField> {
        public constructor(props: IPropsTextField) {
                super(props);

                this.state = {
                        pressed: false,
                        focus: false,
                };
        }

        public render(): React.ReactNode {
                return (
                        <div className={classNames({ 'text-field-base-container': true, focus: this.state.focus })}>
                                {this.props.children}
                                <input
                                        type="text"
                                        className={classNames({ 'text-field-base': true, [this.props.className || '']: this.props.className !== undefined })}
                                        style={{ ...this.props.style }}
                                        placeholder={this.props.placeholder}
                                        onFocus={(event) => {
                                                this.setState({
                                                        pressed: true,
                                                        focus: true,
                                                });

                                                baseEventHandler(event, this.props.onFocus);
                                        }}
                                        onBlur={(event) => {
                                                this.setState({
                                                        pressed: false,
                                                        focus: false,
                                                });

                                                baseEventHandler(event, this.props.onBlur);
                                        }}
                                />
                        </div>
                );
        }
}
