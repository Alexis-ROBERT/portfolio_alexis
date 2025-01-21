import React from 'react';
import type {IPropsSection, PropertyTextAlign, TitleSection} from './section.type';
import './_section.scss';
import classNames from 'classnames';
import {gsap} from "gsap";

export default class Section extends React.Component<IPropsSection> {
    private readonly _align: PropertyTextAlign;

    public constructor(props: IPropsSection) {
        super(props);

        if (props.align === undefined) {
            this._align = 'center';
        } else {
            this._align = props.align;
        }
    }

    public componentDidMount() {
        gsap.to('.title-main-section-base', {
            backgroundPosition: "100% 100%",
            duration: 3,
            repeat: -1,
            ease: 'linear',
        })
    }

    public render(): React.ReactNode {
        return (
            <section className={classNames('section-base')} style={{textAlign: this._align}}>
                <div className="section-title-container">
                    {this._validateProps(
                        <h2 className="title-main-section-base">
                            {this.props.title}
                        </h2>,
                        'title'
                    )}
                    {this._validateProps(<h3
                        className="sub-title-section-base">"{this.props.description}"</h3>, 'description')}
                </div>
                <div>
                    <div className={classNames({
                        'section-content-base': true,
                        [this._align || '']: this._align !== undefined
                    })}>
                        {this.props.children}
                    </div>
                </div>
            </section>
        );
    }

    private _validateProps(element: React.ReactNode, titleSection: TitleSection): React.ReactNode {
        if (this.props?.[titleSection] !== undefined) {
            return element;
        }
    }
}
