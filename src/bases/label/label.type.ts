import { AttributeBase, ChildrenElementBase } from "../bases.type";

export interface IPropsLabel extends AttributeBase, ChildrenElementBase {
    actived?: (is: boolean) => any;

    text: string
}