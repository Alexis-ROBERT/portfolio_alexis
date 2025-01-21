import React from 'react';

export interface IPropsNavLink {
        className?: string;

        style?: React.CSSProperties;

        children: React.ReactNode;

        to: string;

        title: string;

        actived?: boolean;
}

export interface IStateNavLink {
        actived: boolean;

        hover: boolean;
}
