import type {PropsButtonBase, StateFocusBase, StateInteractableBase, StateVisibleBase} from '../bases.type';

export interface IPropsSelectOption<T> extends PropsButtonBase {
    select?: (option: ValueOption<React.ReactNode>) => any;

    default?: ValueOption<T>;

    options: ValueOption<T>[];

    scroll?: number;

    police?: boolean;

    newOption?: ValueOption<T>[] | ValueOption<T>;
}

export interface IStateSelectOption<T> extends StateInteractableBase, StateVisibleBase, StateFocusBase {
    option: ValueOption<T>;

    scroll: boolean;

    new: boolean;

    search?: string;
}

export interface ValueOption<T> {
    visibleValue?: T;

    value: T;
}
