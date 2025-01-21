import type {PropsButtonBase, StateActivedBase, StateInteractableBase} from '@bases/bases.type';

export interface IPropsButtonSection extends PropsButtonBase {
    size: number;
}

export interface IStateButtonSection extends StateInteractableBase, StateActivedBase {
}
