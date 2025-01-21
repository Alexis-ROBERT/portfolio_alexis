import React from 'react';
import type {IPropsDropZoneElement, IStateDropZoneElement} from './drop.zone.element.type';
import classNames from 'classnames';
import './_dropZoneElement.scss';
import {baseDragInfoDocumentHandler, baseEventHandler} from '@bases/base.utils.ts';
import DropElement from '../dropElement/drop.element';
import ScrollZone from '../../bases/scrollZone/scroll.zone';

export default class DropZoneElement extends React.Component<IPropsDropZoneElement, IStateDropZoneElement> {
    public constructor(props: IPropsDropZoneElement) {
        super(props);

        this.state = {
            visible: false,
            dropElement: [],
        };

        console.log("DropZoneElement");
    }

    public render(): React.ReactNode {
        return (
            <div className='drop-zone-element-container' style={{width: 800, height: 400}}>
                <div
                    className={classNames({
                        'drop-zone-element-base': true,
                        [this.props.className || '']: this.props.className !== undefined,
                    })}
                    onDrop={(event) => {
                        event.preventDefault();

                        try {
                            const dragInfosDocument = baseDragInfoDocumentHandler(event);

                            if (dragInfosDocument) {
                                if (dragInfosDocument.type === undefined || dragInfosDocument.name === undefined) {
                                    return;
                                }

                                this.state.dropElement.push(dragInfosDocument);
                            }
                            this.setState({visible: false});
                        } catch (err) {
                            this.setState({visible: false});
                        }
                    }}
                    onDragOver={(event) => {
                        event.preventDefault();
                        this.setState({visible: true});
                        baseEventHandler(event, this.props.onDragOver);
                    }}
                    onDragLeave={(event) => {
                        this.setState({visible: false});
                        baseEventHandler(event, this.props.onDragLeave);
                    }}
                    onDragExit={this.props.onDragExit}
                    onDragEnter={this.props.onDragEnter}
                >
                    <div className={classNames({
                        'drop-zone-element-infos-base': true,
                        'visible-infos': this.state.visible
                    })}>
                        <div className="drop-zone-element-infos-content-base">
                            <h3>Déposer votre document ici !</h3>
                            <img src="" alt=""/>
                        </div>
                    </div>
                    <div>{this.props.children}</div>
                </div>
                <div>
                    <ScrollZone display="flex">{this._disposeDropElement()}</ScrollZone>
                </div>
            </div>
        );
    }

    private _disposeDropElement(): React.ReactNode {
        return this.state.dropElement.map((infos, i) => {
            return <DropElement className="drop-element-dispose" key={i} text={infos.name as string} to="" title=""/>;
        });
    }
}
