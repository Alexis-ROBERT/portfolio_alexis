import { ISceneEnvironment } from '../../scene/types/scene.environment.type';

export interface ILightObjectEnvironment {
        intensity: number;
}

export enum LightValueConstraint {
        MAX_INTENSITY = 9999,
}

export type LightSceneEnvironment = ISceneEnvironment<ILightObjectEnvironment>;
