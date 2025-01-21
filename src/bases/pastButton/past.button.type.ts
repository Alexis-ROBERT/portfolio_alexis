import { PropsButtonBase, StateInteractableBase } from '../bases.type';

export interface IPropsPastButton extends PropsButtonBase {
        data: string;
}

export interface IStatePastButton extends StateInteractableBase {
        past: boolean;
}
