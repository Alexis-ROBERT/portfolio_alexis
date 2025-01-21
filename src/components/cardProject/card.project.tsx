import React from 'react';
import type {IPropsCardProject} from './card.project.type';
import classNames from 'classnames';
import Button from '../../bases/button/button';
import './_cardProject.scss';

export default class CardProject extends React.Component<IPropsCardProject> {
    public constructor(props: IPropsCardProject) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div
                className={classNames({
                    'card-project-base': true,
                    [this.props.className || '']: this.props.className !== undefined
                })}
                style={this.props.style}
            >
                <div>
                    <img src={this.props.src} alt={this.props.alt}/>
                </div>
                <div>
                    <span className="">{this.props.title}</span>
                    {this.props.children}
                </div>
                <div>
                    <Button className="card-project-btn-view">Voir</Button>
                </div>
            </div>
        );
    }
}
