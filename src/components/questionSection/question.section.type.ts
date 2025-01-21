import { ChildrenElementBase, PropsButtonBase } from '../../../../gui/bases/bases.type';

export interface IPropsQuestionSection extends PropsButtonBase, ChildrenElementBase {
        question: string;
}

export interface IStateQuestionSection {
        open: boolean;
}

