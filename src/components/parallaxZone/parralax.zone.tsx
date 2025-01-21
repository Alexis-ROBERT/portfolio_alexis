import React from "react";
import type {IPropsParralaxZone, IStateParralaxZone} from "./parralax.zone.type";
import type {Div} from "../../bases/bases.type.ts";

export default class ParallaxZone extends React.Component<IPropsParralaxZone, IStateParralaxZone> {
    public _ref: React.RefObject<Div>

    public constructor(props: IPropsParralaxZone) {
        super(props);

        this.state = {
            scroll: props.start || 0
        }

        this._ref = React.createRef();
    }

    public componentDidMount(): void {
        window.addEventListener('scroll', () => {
            this.setState({scroll: window.scrollY * this.props.speed / 100});
            console.log(this.state.scroll)
        })
    }

    public render(): React.ReactNode {
        return <div className="parallax-zone-base" style={{transform: `translateY(${this.state.scroll}px)`}}>
            {this.props.children}
        </div>
    }
}
