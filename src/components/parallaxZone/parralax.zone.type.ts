import type {AttributeBase, ChildrenElementBase} from "../../bases/bases.type";

export interface IPropsParralaxZone extends AttributeBase, ChildrenElementBase {
    start?: number;

    speed: number;
}

export interface IStateParralaxZone {
    scroll: number;
}
