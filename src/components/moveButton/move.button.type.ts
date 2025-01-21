import React from 'react';
import type {IStateButton} from '../../bases/button/button.type';

export interface IPropsMoveButton {
    className?: string;

    style?: React.CSSProperties;

    size?: number;

    onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;

    onMouseUp?: React.MouseEventHandler<HTMLButtonElement>;

    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type MoveButtonMouseEventHandler = React.MouseEventHandler<HTMLButtonElement>;
export type MoveButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

export interface IStateMoveButton extends IStateButton {
}
