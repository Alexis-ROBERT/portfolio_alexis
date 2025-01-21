import React from 'react';
import { IPropsVideoPlayer, IStateVideoPlayer } from './video.player.type';
import { baseEventHandler } from '../base.utils';
import { Video } from '../bases.type';
import classNames from 'classnames';
import './_videoPlayer.scss';

export default class VideoPlayer extends React.Component<IPropsVideoPlayer, IStateVideoPlayer> {
        public constructor(props: IPropsVideoPlayer) {
                super(props);

                this._ref = React.createRef();

                this.state = {
                        play: props.play !== undefined ? props.play : true,
                        fullscreen: props.fullscreen !== undefined ? props.fullscreen : false,
                };
        }

        private _ref: React.RefObject<Video>;

        public componentDidUpdate(props: Readonly<IPropsVideoPlayer>, state: Readonly<IStateVideoPlayer>): void {
                switch (state.play) {
                        case true:
                                this._ref.current?.play();
                                break;

                        case false:
                                this._ref.current?.pause();
                                break;
                }

                if (props.volume) this._ref.current!.volume = props.volume;
        }

        public render(): React.ReactNode {
                return (
                        <video
                                className={classNames({ 'video-player-base': true, 'video-player-fullscreen-': this.state.fullscreen, [this.props.className || '']: this.props.className !== undefined })}
                                style={this.props.style}
                                ref={this._ref}
                                controls={this.props.control !== undefined ? this.props.control : false}
                                src={this.props.src}
                                autoPlay={this.state.play}
                                onMouseDown={(event) => {
                                        this.setState({
                                                play: !this.state.play,
                                        });

                                        baseEventHandler(event, this.props.onMouseDown);
                                }}
                        />
                );
        }
}
