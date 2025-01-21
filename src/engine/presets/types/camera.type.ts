import type {ISceneEnvironment} from '../../scene/types/scene.environment.type';

export interface ICameraObjectEnvironment {
    angle: number,

    zoom: number,
}

export type CameraSceneEnvironment = ISceneEnvironment<ICameraObjectEnvironment>;
