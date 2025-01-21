import type {ImageAttributeBase, PropsButtonBase, StateInteractableBase} from '@bases/bases.type';

export interface IPropsButtonIconCount extends PropsButtonBase, ImageAttributeBase {
    base: number;

    count?: (count: number) => any;

    convert?: boolean;
}

export interface IStateButtonIconCount extends StateInteractableBase {
    isCount: boolean;
}
