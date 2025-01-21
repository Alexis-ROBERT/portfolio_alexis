import React from 'react';
import type {IPropsCheckBox, IStateChackBox} from './checkbox.type';
import classNames from 'classnames';
import './_checkbox.scss';

export default class CheckBox extends React.Component<IPropsCheckBox, IStateChackBox> {
    public constructor(props: IPropsCheckBox) {
        super(props);

        this.state = {
            check: false,
            pressed: false,
        };

        if (props.onCheck) {
            props.onCheck(this.state.check);
        }
    }

    render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'checkbox-base': true,
                    'checkbox-pressed': this.state.pressed,
                    'checkbox-check': this.state.check
                })}
                style={this.props.style}
                onMouseDown={() => {
                    this.setState({check: !this.state.check, pressed: true});
                }}
                onMouseUp={() => {
                    this.setState({pressed: false});
                }}
                onBlur={() => {
                    this.setState({pressed: false});
                }}
            >
                {this._isCheck()}
            </button>
        );
    }

    private _isCheck(): React.ReactNode {
        if (this.state.check) {
            return (
                <svg className="check-base" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M9.00001 18.25C8.8993 18.2466 8.80034 18.2227 8.70921 18.1797C8.61807 18.1367 8.53667 18.0756 8.47001 18L3.47001 13C3.37467 12.9382 3.29463 12.8556 3.23592 12.7583C3.17721 12.661 3.14136 12.5517 3.13109 12.4385C3.12082 12.3254 3.13639 12.2114 3.17663 12.1051C3.21686 11.9989 3.28071 11.9031 3.36336 11.8252C3.446 11.7472 3.54528 11.689 3.65369 11.6551C3.76211 11.6211 3.87682 11.6122 3.98918 11.629C4.10155 11.6458 4.20861 11.688 4.3023 11.7523C4.39599 11.8165 4.47385 11.9013 4.53001 12L9.00001 16.44L19.47 6.00003C19.611 5.90864 19.7785 5.86722 19.9458 5.88241C20.1131 5.89759 20.2705 5.96851 20.3927 6.08379C20.5149 6.19907 20.5948 6.35203 20.6197 6.51817C20.6446 6.68431 20.613 6.85399 20.53 7.00003L9.53001 18C9.46334 18.0756 9.38194 18.1367 9.29081 18.1797C9.19967 18.2227 9.10072 18.2466 9.00001 18.25Z"
                    />
                </svg>
            );
        }

        return (
            <svg className="check-base check-disabled" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.00001 18.25C8.8993 18.2466 8.80034 18.2227 8.70921 18.1797C8.61807 18.1367 8.53667 18.0756 8.47001 18L3.47001 13C3.37467 12.9382 3.29463 12.8556 3.23592 12.7583C3.17721 12.661 3.14136 12.5517 3.13109 12.4385C3.12082 12.3254 3.13639 12.2114 3.17663 12.1051C3.21686 11.9989 3.28071 11.9031 3.36336 11.8252C3.446 11.7472 3.54528 11.689 3.65369 11.6551C3.76211 11.6211 3.87682 11.6122 3.98918 11.629C4.10155 11.6458 4.20861 11.688 4.3023 11.7523C4.39599 11.8165 4.47385 11.9013 4.53001 12L9.00001 16.44L19.47 6.00003C19.611 5.90864 19.7785 5.86722 19.9458 5.88241C20.1131 5.89759 20.2705 5.96851 20.3927 6.08379C20.5149 6.19907 20.5948 6.35203 20.6197 6.51817C20.6446 6.68431 20.613 6.85399 20.53 7.00003L9.53001 18C9.46334 18.0756 9.38194 18.1367 9.29081 18.1797C9.19967 18.2227 9.10072 18.2466 9.00001 18.25Z"
                />
            </svg>
        );
    }
}
