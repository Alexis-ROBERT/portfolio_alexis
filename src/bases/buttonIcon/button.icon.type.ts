import type {ImageAttributeBase, PropsButtonBase, PropsInteractableBase} from '../bases.type';

export interface IPropsButtonIcon extends PropsButtonBase, ImageAttributeBase {
    size: number;
}

export interface IStateButtonIcon extends PropsInteractableBase {
}
