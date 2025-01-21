import React from 'react';
import type {IPropsMoveButton, IStateMoveButton} from './move.button.type';
import classNames from 'classnames';
import './_moveButton.scss';

export default class MoveButton extends React.Component<IPropsMoveButton, IStateMoveButton> {
    public constructor(props: IPropsMoveButton) {
        super(props);

        this.state = {
            pressed: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <button
                className={classNames({
                    'move-button-base': true,
                    [this.props.className || '']: this.props.className !== undefined,
                    pressed: this.state.pressed,
                })}
                style={{width: 100, height: 100, borderRadius: '50%', ...this.props.style}}
                onMouseDown={() => this.setState({pressed: true})}
                onMouseUp={() => this.setState({pressed: false})}
                onBlur={() => this.setState({pressed: false})}
                onClick={this.props.onClick}
            >
                <div className="arrow-move-button-vector-container">
                    <svg
                        className="arrow-move-button-vector"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30 8.83501L27.8914 6.75L14.9802 19.1415L13.6032 17.82L13.6113 17.8275L2.1402 6.81752L0 8.871C3.1695 11.9145 12.0207 20.4105 14.9802 23.25C17.1792 21.141 15.036 23.1975 30 8.83501Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </button>
        );
    }
}
