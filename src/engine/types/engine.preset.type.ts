import EnginePresetConstructor from '../engine.preset';
import type {ISceneEnvironment} from '../scene/types/scene.environment.type';

export type PresetMesh = 'sphere' | 'cube' | 'plane';

export interface IFoundPresetObject<O = {}> {
    object: ISceneEnvironment<O>;

    index: number;
}

export interface IEnginePreset<O> {
    create: (object: ISceneEnvironment<O>) => EnginePresetConstructor<O>;

    render: (object: ISceneEnvironment<O>) => void;

    delete: (object: ISceneEnvironment<O>) => boolean;

    getObject: (object: ISceneEnvironment<O>) => ISceneEnvironment<O> | undefined;

    getAllObject: () => ISceneEnvironment<O>[];

    property: O;

    getIdObject: (id: string) => ISceneEnvironment<O> | undefined;
}

export enum ErrorValueHandle {
    NOT_FOUND = 0,
}
