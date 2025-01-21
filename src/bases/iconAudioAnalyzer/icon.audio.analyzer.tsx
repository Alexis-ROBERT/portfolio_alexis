import React from 'react';
import MediaAudioAnalyzer from '../../../services/media/media..audio.analyzer';
import MediaStreamUser from '../../../services/media/media.user';
import Icon from '../icon/icon';
import { IPropsIconAudioAnalyzer, IStateIconAudioAnalyzer } from './icon.audio.analyzer.type';
import classNames from 'classnames';

export default class IconAudioAnalyzer extends React.Component<IPropsIconAudioAnalyzer, IStateIconAudioAnalyzer> {
        public constructor(public props: IPropsIconAudioAnalyzer) {
                super(props);
                this._mediaStream = new MediaStreamUser({
                        audio: true,
                });

                props.active ?? false;

                this.state = {
                        transformCurrent: 0,
                };
        }

        private _analyzer: MediaAudioAnalyzer;

        private _mediaStream: MediaStreamUser;

        public componentDidUpdate(props: Readonly<IPropsIconAudioAnalyzer>): void {
                if (props.active) {
                        console.log('Hello World')
                        if (this._mediaStream.start()) {
                                this._analyzer = new MediaAudioAnalyzer(this._mediaStream.stream, props.transform);

                                this._analyzer.start();

                                this._analyzer.tranformUpdateVolumeFrequency((frequency) => {
                                        this.setState({ transformCurrent: frequency });
                                });
                        }
                }
        }

        public render(): React.ReactNode {
                return (
                        <div
                                className={classNames({
                                        'icon-audio-analyser': true,
                                        [this.props.className || '']: this.props.className !== undefined,
                                })}
                        >
                                <Icon src={this.props.src} alt={this.props.alt} size={this.props.size} />
                        </div>
                );
        }
}
