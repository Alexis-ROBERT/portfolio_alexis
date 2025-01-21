import { PropsInputBase, StateFocusBase, StateInteractableBase } from '../bases.type';

export interface IPropsTextFieldLine extends PropsInputBase {
        src?: string;

        alt?: string;
}

export interface IStateTextFieldLine extends StateFocusBase, StateInteractableBase {}
