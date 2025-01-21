import type {PropsButtonBase, StateInteractableBase} from '../bases.type';

export interface IPropsCheckBox extends PropsButtonBase {
    onCheck?: (check: boolean) => any;
}

export interface IStateChackBox extends StateInteractableBase {
    check: boolean;
}
