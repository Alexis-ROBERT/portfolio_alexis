import React from 'react';
import {Editor} from '@monaco-editor/react';
import './_demoZone.scss';
import PastButton from '../../bases/pastButton/past.button';
import type {IPropsDemoZone} from './demo.zone.type';

export default class DemoZone extends React.Component<IPropsDemoZone> {
    public constructor(props: IPropsDemoZone) {
        super(props);
    }

    public render(): React.ReactNode {
        // @ts-ignore
        return (
            <div className="demo-zone-base">
                <div className="demo-zone-title-container">
                    <span className="demo-zone-title">{this.props.title}</span>
                    <PastButton className="demo-zone-paste-button" data=""/>
                </div>
                <div className="demo-zone-editor-container">
                    <Editor
                        defaultLanguage="javascript"
                        defaultValue={this.props.data}
                        theme="vs-dark"
                        options={{
                            readOnly: this.props.desactived,
                            contextmenu: false,
                            colorDecorators: true,
                            extraEditorClassName: 'demo-zone-editor',
                        }}
                    />
                    ;
                </div>
            </div>
        );
    }
}
