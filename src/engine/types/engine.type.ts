import CollisionEngineConstructor from '../collision/collision';
import EnginePresetConstructor from '../engine.preset';
import ImportEngineConstructor from '../import/import';
import CameraEngineConstructor from '../presets/camera';
import LightEngineConstructor from '../presets/light';
import SunEngineConstructor from '../presets/sun';
import type {ISceneEnvironment} from '../scene/types/scene.environment.type';

export type TFrameEngineRequest = FrameRequestCallback;

export interface IEngineApplicationInfo {
    version: number;

    name: string;
}

export interface IEngineWebGL {
    APPLICATION_INFO: IEngineApplicationInfo;

    light: LightEngineConstructor;

    import: ImportEngineConstructor;

    camera: CameraEngineConstructor;

    sun: SunEngineConstructor;

    collision: CollisionEngineConstructor;

    webGL2Context: WebGL2RenderingContext;

    webGL2Program: WebGLProgram;
}

export interface IEngineHandle {
    atLaunch: () => void;

    perFrame: TFrameEngineRequest;
}

export interface IEngineEventHandle {
    renderLoop: () => void;

    launch: () => void;
}

export enum EngineValueExcept {
    NOT_CONTEXT = 0,

    NOT_PROGRAM = 1,

    NOT_SHADER = 2,

    NOT_LINK_PROGRAM = 3,

    NOT_COMPILED = 4,
}

export type TEngineValue =
    | EngineValueExcept.NOT_CONTEXT
    | EngineValueExcept.NOT_PROGRAM
    | EngineValueExcept.NOT_SHADER
    | EngineValueExcept.NOT_LINK_PROGRAM
    | EngineValueExcept.NOT_COMPILED;

export enum EngineErrorValueMessage {
    MESSAGE_NOT_CONTEXT = 'Error initialization of WebGL v2',

    MESSAGE_NOT_PROGRAM = 'Error create programme shader',

    MESSAGE_NOT_SHADER = 'Error create shader',

    MESSAGE_NOT_LINK_PROGRAM = 'Error link programm',
}

export interface IIsInstantiableEngineScene<O> {
    instance: EnginePresetConstructor<O>;

    scene: ISceneEnvironment<O>;
}

export type TEngineErrorValueMessage =
    | EngineErrorValueMessage.MESSAGE_NOT_CONTEXT
    | EngineErrorValueMessage.MESSAGE_NOT_PROGRAM
    | EngineErrorValueMessage.MESSAGE_NOT_SHADER
    | EngineValueExept.NOT_LINK_PROGRAM;
