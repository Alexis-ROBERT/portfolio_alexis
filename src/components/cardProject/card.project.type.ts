import type {AttributeBase, ChildrenElementBase} from '../../bases/bases.type';

export interface IPropsCardProject extends AttributeBase, ChildrenElementBase {
    title: string;

    language: ILangagueProgramming;

    src: string;

    alt: string;

    to: string;
}

export interface ILangagueProgramming {
    js?: boolean;

    ts?: boolean;

    html?: boolean;

    css?: boolean;

    cpp?: boolean;

    c?: boolean;

    cs?: boolean;

    java?: boolean;

    rust?: boolean;

    pascal?: boolean;

    fortran?: boolean;

    go?: boolean;

    xml?: boolean;

    obectiveC?: boolean;

    swift?: boolean;

    dart?: boolean;

    xaml?: boolean;
}
