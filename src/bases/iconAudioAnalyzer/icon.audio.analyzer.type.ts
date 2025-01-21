import { IPropsIcon } from '../icon/icon.type';

export interface IPropsIconAudioAnalyzer extends IPropsIcon {
        transform: number;

        active?: boolean;
}

export interface IStateIconAudioAnalyzer {
        transformCurrent: number;
}
