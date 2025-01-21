import React from 'react';
import { IPropsPanelShow, IStatePanelShow } from './panel.show.type';
import ButtonIcon from '../buttonIcon/button.icon';
import CrossVector from '../../assets/svg/close.svg';
import './_panelShow.scss';
import classNames from 'classnames';

export default class PanelShow extends React.Component<IPropsPanelShow, IStatePanelShow> {
        public constructor(props: IPropsPanelShow) {
                super(props);

                this.state = {
                        close: !props.show || false,
                        pressed: false,
                };
        }

        public render(): React.ReactNode {
                if (!this.state.close) {
                        return (
                                <div className={classNames({ 'panel-show-container': true, 'panel-show-open': !this.state.close })}>
                                        <div
                                                className="panel-show-base"
                                        >
                                                <div className="panel-show-btn-close-container">
                                                        <ButtonIcon
                                                                className={classNames({
                                                                        'panel-show-btn-close': true,
                                                                        'pressed-panel-btn-close': this.state.pressed,
                                                                })}
                                                                src={CrossVector}
                                                                alt="Cross"
                                                                size={50}
                                                                onMouseDown={() => {
                                                                        this.setState({ pressed: true })
                                                                }} 
                                                                onClick={() => {
                                                                        this.setState({ close: true });
                                                                }}
                                                                onMouseUp={() => {
                                                                        this.setState({ pressed: false });
                                                                }}
                                                                onBlur={() => {
                                                                        this.setState({ pressed: false });
                                                                }}
                                                        />
                                                </div>
                                                {this.props.children}
                                        </div>
                                </div>
                        );
                }
        }
}
