import { PropsVideoBase, StatePlayBase } from '../bases.type';

export interface IPropsVideoPlayer extends PropsVideoBase {
        play?: boolean;

        fullscreen?: boolean;
}

export interface IStateVideoPlayer extends StatePlayBase {
        fullscreen: boolean;
}
