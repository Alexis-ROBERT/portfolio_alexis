import React from 'react';
import SceneRender from '@scene/scene.render';

export interface IPropsCanvas {
    style?: React.CSSProperties;

    className?: string;

    scene: (ref: React.RefObject<HTMLCanvasElement>) => SceneRender;
}

export interface IStateCanvas {
    isLoading: boolean;
}
