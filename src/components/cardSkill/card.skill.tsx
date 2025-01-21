import React from 'react';
import type {IPropsCardSkill, IStateCardSkill} from './card.skill.type';
import classNames from 'classnames';

export default class CardSkill extends React.Component<IPropsCardSkill, IStateCardSkill> {

    public constructor(props: IPropsCardSkill) {
        super(props);

        this.state = {
            topLine: false,
            bottomLine: false,
        };
    }

    public render(): React.ReactNode {
        return (
            <div className={classNames({
                'card-skill-base': true,
                [this.props.className || '']: this.props.className !== undefined
            })}>
                <img src={this.props.src} alt={this.props.alt}/>
                <h3>{this.props.title}</h3>
                <div className="card-skill-content-base">{}</div>
            </div>
        );
    }
}
