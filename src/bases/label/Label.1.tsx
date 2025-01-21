import React from "react";
import type {IPropsLabel} from "./label.type";
import classNames from "classnames";


export default class Label extends React.Component<IPropsLabel> {
    public constructor(props: IPropsLabel) {
        super(props);
        console.log(undefined || 'sq');
    }

    public render(): React.ReactNode {
        return <div className="label-container-base">
            <label className={classNames({'label-base': true,})} style={this.props.style} onClick={() => {
                if (this.props.actived) {
                    this.props.actived(true);
                }
            }}>
                {this.props.text}
            </label>
            <div>
                {this.props.children}
            </div>
        </div>;
    }
}
