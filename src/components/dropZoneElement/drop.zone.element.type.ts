import type {
        AttributeBase,
        ChildrenElementBase,
        Div,
        DragHandleEvent,
        DragInfoDocument,
        StateVisibleBase,
} from '@bases/bases.type.ts';

export interface IPropsDropZoneElement extends AttributeBase, DragHandleEvent<Div>, ChildrenElementBase {
}

export interface IStateDropZoneElement extends StateVisibleBase {
    dropElement: DragInfoDocument[];
}
