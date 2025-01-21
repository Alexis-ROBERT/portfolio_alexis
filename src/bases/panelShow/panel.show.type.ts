import { ChildrenElementBase, StateInteractableBase } from '../bases.type';

export interface IPropsPanelShow extends ChildrenElementBase {
        show: boolean;
}

export interface IStatePanelShow extends StateInteractableBase {
        close: boolean;
}
