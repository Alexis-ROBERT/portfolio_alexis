import React from 'react';
import type {IInfosSection, IPropsScrollSection} from './scroll.section.type';
import Section from '../section/section';
import ButtonSection from '../buttonSection/button.section';
import PanelInfos from '../panelInfos/panel.infos';

export default class ScrollSection extends React.Component<IPropsScrollSection> {
    private _processRender: IInfosSection[] = [];

    public constructor(props: IPropsScrollSection) {
        super(props);
    }

    public render(): React.ReactNode {
        return (
            <div>
                <div>{this._validateElement()}</div>
                {this._renderCheckpointInfosSection()}
            </div>
        );
    }

    private _renderCheckpointInfosSection(): React.ReactNode {
        return this._processRender.map<React.ReactNode>((infos, i) => {
            return (
                <div className='section-infos-container'>
                    <PanelInfos key={i} title={infos.title} description={infos.description}/>
                    <ButtonSection key={i} size={30}/>
                </div>
            );
        });
    }

    private _validateElement(): React.ReactNode {
        return React.Children.map(this.props.children, (children) => {
            if (React.isValidElement(children) && children.type === Section) {
                const section = children.props as Section;

                this._processRender.push({
                    title: section.props.title,
                    description: section.props.description,
                });

                return children.props;
            }
        });
    }
}
