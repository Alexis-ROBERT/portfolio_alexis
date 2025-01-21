import React from 'react';
import { IPropsPastButton, IStatePastButton } from './past.button.type';
import { baseEventHandler } from '../base.utils';
import classNames from 'classnames';
import './_pastButton.scss';

export default class PastButton extends React.Component<IPropsPastButton, IStatePastButton> {
        private _pastEventHandler() {
                if (!this.state.past) {
                        navigator.clipboard
                                .writeText(this.props.data)
                                .then(() => {
                                        this.setState({ past: true });

                                        setTimeout(() => {
                                                this.setState({ past: false });
                                        }, 5000);
                                })
                                .catch(() => {});
                }
        }

        private _pastRender(): React.ReactNode {
                if (this.state.past) {
                        return (
                                <svg className="past-button-success-base" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M21.4685 5.42433C21.9246 5.77509 22.0099 6.4291 21.659 6.88509L11.2424 20.4268C11.0597 20.6643 10.7834 20.8117 10.4842 20.8311C10.1851 20.8505 9.89213 20.7401 9.68017 20.5283L4.47184 15.3199C4.06505 14.913 4.06505 14.2536 4.47184 13.8467C4.87864 13.4399 5.53819 13.4399 5.94499 13.8467L10.3144 18.2162L20.0078 5.61486C20.3585 5.15886 21.0126 5.07356 21.4685 5.42433Z"
                                        />
                                </svg>
                        );
                }

                return (
                        <svg width="20" height="25" viewBox="0 0 20 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10 0C9.14967 0 8.477 0.136639 7.95189 0.39045C7.76056 0.482924 7.5785 0.592037 7.43179 0.681707L7.32262 0.748704C7.21271 0.816308 7.12022 0.873189 7.02312 0.928096C6.77182 1.0702 6.67661 1.08532 6.66726 1.0868C6.66688 1.0868 6.66648 1.08693 6.66726 1.0868C5.43996 1.0868 4.44444 2.06025 4.44444 3.26087H3.33333C1.49239 3.26087 0 4.72082 0 6.52174V21.7391C0 23.5401 1.49239 25 3.33333 25H16.6667C18.5077 25 20 23.5401 20 21.7391V6.52174C20 4.72082 18.5077 3.26087 16.6667 3.26087H15.5556C15.5556 2.06025 14.5607 1.08696 13.3333 1.08696C13.3341 1.08708 13.3337 1.08696 13.3333 1.08696C13.324 1.08547 13.2282 1.0702 12.9769 0.928096C12.8798 0.873185 12.7873 0.816309 12.6773 0.7487L12.5682 0.681707C12.4214 0.592037 12.2394 0.482924 12.0481 0.39045C11.523 0.136639 10.8503 0 10 0ZM15.2582 5.43478C14.874 6.08457 14.1559 6.52174 13.3333 6.52174H6.66667C5.84413 6.52174 5.12597 6.08457 4.74173 5.43478H3.33333C2.71969 5.43478 2.22222 5.92143 2.22222 6.52174V21.7391C2.22222 22.3395 2.71969 22.8261 3.33333 22.8261H16.6667C17.2803 22.8261 17.7778 22.3395 17.7778 21.7391V6.52174C17.7778 5.92143 17.2803 5.43478 16.6667 5.43478H15.2582ZM8.93622 2.33945C9.06956 2.27501 9.38056 2.17391 10 2.17391C10.6194 2.17391 10.9304 2.27501 11.0638 2.33945C11.1476 2.37992 11.2484 2.43841 11.3907 2.52536L11.4734 2.57617C11.5889 2.6472 11.7281 2.73291 11.8648 2.81021C12.1902 2.99423 12.7148 3.26087 13.3333 3.26087V4.34783H6.66667V3.26087C7.28518 3.26087 7.80978 2.99423 8.13522 2.81021C8.27189 2.73291 8.41111 2.64721 8.52656 2.57617L8.60933 2.52536C8.75156 2.43841 8.85244 2.37992 8.93622 2.33945Z"
                                        fill="white"
                                />
                        </svg>
                );
        }

        public constructor(props: IPropsPastButton) {
                super(props);

                this.state = {
                        pressed: false,
                        past: false,
                };
        }

        public render(): React.ReactNode {
                return (
                        <button
                                className={classNames({
                                        'past-button-base': true,
                                        'pressed-past-button': this.state.pressed,
                                        [this.props.className || '']: this.props.className !== undefined,
                                })}
                                onMouseDown={(event) => {
                                        this.setState({ pressed: true });
                                        baseEventHandler(event, this.props.onMouseDown);
                                }}
                                onClick={() => {
                                        this._pastEventHandler();
                                }}
                                onMouseUp={(event) => {
                                        this.setState({ pressed: false });
                                        baseEventHandler(event, this.props.onMouseUp);
                                }}
                                onBlur={(event) => {
                                        this.setState({ pressed: false });
                                        baseEventHandler(event, this.props.onBlur);
                                }}
                        >
                                {this._pastRender()}
                        </button>
                );
        }
}
