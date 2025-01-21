import React from 'react';

export interface IPropsTextField {
        type?: 'text' | 'password | email';

        className?: string;

        style?: React.CSSProperties;

        children?: React.ReactNode;

        placeholder?: string;

        onFocus?: React.FocusEventHandler<HTMLInputElement>;

        onBlur?: React.FocusEventHandler<HTMLInputElement>;

        onMouseUp?: React.MouseEvent<HTMLInputElement>;

        onMouseDown?: React.MouseEvent<HTMLInputElement>;
}

export interface IStateTextField {
        pressed: boolean;

        focus: boolean;
}
