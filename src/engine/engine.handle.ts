import type {IEngineHandle} from "./types/engine.type";

export default abstract class EngineHandleWebGL implements IEngineHandle {
    atLaunch: () => void;

    perFrame: (time: number) => void;
}
