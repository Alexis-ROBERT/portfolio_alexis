import React from 'react';

export interface IPropsColorPicker {
        color?: (hex: number) => void;

        className?: string;

        style?: React.CSSProperties;
}

export interface IStateColorPicker {
        visible: boolean;

        color: number;

        pressed: boolean;
}