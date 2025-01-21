import { PropsButtonBase, StateActivedBase, StateInteractableBase } from '../../../../gui/bases/bases.type';

export interface IPropsTimeButton extends PropsButtonBase {
        time: number;

        wait?: boolean;

        textWait?: string;

        textActived?: string;

        src?: string;

        alt?: string;
}

export interface IStateTimeButton extends StateInteractableBase, StateActivedBase {
        newTime: number;
}
