import classNames from 'classnames';
import React from 'react';
import { IPropsTextFieldLine, IStateTextFieldLine } from './text.field.line.type';
import './_textFieldLine.scss';
import { baseEventHandler } from '../base.utils';

export default class TextFieldLine extends React.Component<IPropsTextFieldLine, IStateTextFieldLine> {
        public constructor(props: IPropsTextFieldLine) {
                super(props);

                this.state = {
                        focus: false,
                        pressed: false,
                };
        }

        public render(): React.ReactNode {
                return (
                        <div className={classNames({ 'text-field-line-base': true, [this.props.className || '']: this.props.className !== undefined })}>
                                <div>
                                        <input
                                                type="text"
                                                placeholder={this.props.placeholder}
                                                onFocus={(event) => {
                                                        this.setState({ focus: true });

                                                        baseEventHandler(event, this.props.onFocus);
                                                }}
                                                onBlur={(event) => {
                                                        this.setState({
                                                                focus: false,
                                                        });

                                                        baseEventHandler(event, this.props.onBlur);
                                                }}
                                        />
                                </div>
                                <div className="line-text-field">
                                        <div className={classNames({ 'focus-text-field-line-base': true, 'focus-line': this.state.focus })} />
                                </div>
                        </div>
                );
        }
}
