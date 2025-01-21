import React from 'react';
import type {IPropsCarousel} from './carrousel.type';
import classNames from 'classnames';

export default class Carousel extends React.Component<IPropsCarousel> {
    public constructor(props: IPropsCarousel) {
        super(props);

        if (props.display === undefined) {
            props.display = 'flex';
        }
    }

    public render(): React.ReactNode {
        return (
            <div>
                <div className={classNames({'carousel-base': true})} style={{display: this.props.display}}>
                    {this._initCarousel()}
                </div>
                <div>

                </div>
            </div>
        );
    }

    private _initCarousel(): React.ReactNode {
        return React.Children.map(this.props.children, (children) => {
            return <div className="carouse">{children}</div>;
        });
    }
}
