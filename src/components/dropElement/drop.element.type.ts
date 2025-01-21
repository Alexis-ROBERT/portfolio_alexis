import type {AnchorAttributeBase, AttributeBase, StateInteractableBase} from '@bases/bases.type';

export interface IPropsDropElement extends AttributeBase, AnchorAttributeBase {
    text: string;
}

export interface IStateDropElement extends StateInteractableBase {
    destroy: boolean;
}
