import React from "react";
import { IPropsPanelInfos, IStatePanelInfos } from "./panel.infos.type";
import classNames from "classnames";

export default class PanelInfos extends React.Component<IPropsPanelInfos, IStatePanelInfos> {
        public constructor(props: IPropsPanelInfos) {
                super(props);

                this.state = {
                    visible: false
                }
        }

        public render(): React.ReactNode {
                return (
                        <div className={classNames({'panel-infos-container': true, 'actived': this.state.visible })}>
                                <span>{this.props.title}</span>
                                <span>{this.props.description}</span>
                        </div>
                )
        }
}