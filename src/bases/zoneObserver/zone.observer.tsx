import React from "react";
import { Div } from "../bases.type";
import classNames from "classnames";
import { IPropsZoneObserver, IStateZoneObserver } from "./zone.observer.type";

export default class ZoneObserver extends React.Component<IPropsZoneObserver, IStateZoneObserver> {
    public constructor(props: IPropsZoneObserver) {
        super(props);

        this.state = {
            actived: false
        }

        this._ref = React.createRef()
    }

    public _ref: React.RefObject<Div>;

    public componentDidMount(): void {
        if (this._ref.current !== null) {
            new IntersectionObserver(() => {
                this.setState({ actived: true });
            }).observe(this._ref.current);
        }
    }

    public render(): React.ReactNode {
        return <div className={classNames({ [this.props.className || '']: this.props.className !== undefined })}>
            {this.props.children}
        </div>
    }
}