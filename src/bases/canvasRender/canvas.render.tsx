/**
 * Alexis ROBERT - copyright 2024
 * CanvasRender
 * Can
 */

import React from 'react';
import type {IPropsCanvas, IStateCanvas} from './canvas.type';
import classNames from 'classnames';

export default class CanvasRender extends React.Component<IPropsCanvas, IStateCanvas> {
    private _ref: React.RefObject<HTMLCanvasElement>;

    constructor(props: IPropsCanvas) {
        super(props);

        this.state = {
            isLoading: true,
        };

        this._ref = React.createRef<HTMLCanvasElement>();
    }

    public componentDidMount(): void {
        try {
            this._sceneRender();
        } catch (err) {
            console.error(err);
        }
    }

    public render(): React.ReactNode {
        return (
            <canvas
                ref={this._ref}
                className={classNames({
                    'canvas-container': true,
                    [this.props.className || '']: this.props.className !== undefined
                })}
                style={{...this.props.style}}
            />
        );
    }

    private _sceneRender(): void {
        if (this._ref.current) {
            const scene = this.props.scene(this._ref);
            scene.rendererScene();

            requestAnimationFrame(scene.update);

            this.setState({isLoading: true});
        }
    }
}
