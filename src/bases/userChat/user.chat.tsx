import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../buttonIcon/button.icon';
import MoreVector from '../../assets/svg/more.svg';
import Icon from '../icon/icon';
import { IPropsUserChat, IStateUserChat } from './user.chat.type';
import './_userChat.scss';
import classNames from 'classnames';

export default class UserChat extends React.Component<IPropsUserChat, IStateUserChat> {
        public constructor(props: IPropsUserChat) {
                super(props);

                this.state = {
                        pressedLink: false,
                };
        }

        public render(): React.ReactNode {
                return (
                        <div className="user-chat-base">
                                <div>
                                        <Icon src={this.props.icon} alt="#" size={30} />
                                </div>
                                <div>
                                        <Link
                                                className={classNames({ 'user-chat-message-link': true, 'pressed-message-link': this.state.pressedLink })}
                                                to={this.props.userName.to}
                                                title={this.props.userName.name}
                                                onMouseDown={() => {
                                                        this.setState({ pressedLink: true });
                                                }}
                                                onMouseUp={() => {
                                                        this.setState({ pressedLink: false });
                                                }}
                                                onBlur={() => {
                                                        this.setState({ pressedLink: false });
                                                }}
                                        >
                                                {this.props.userName.name}
                                        </Link>
                                </div>
                                <div className='user-chat-message-text'>{this.props.message}</div>
                                <div>
                                        <ButtonIcon src={MoreVector} alt="more" size={20} />
                                </div>
                        </div>
                );
        }
}
