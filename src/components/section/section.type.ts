import React from 'react';

export interface IPropsSection {
        align?: PropertyTextAlign;

        children: React.ReactNode;

        title?: string;

        description?: string;
}

export interface IStateSection {
        style: React.CSSProperties;
}

export type PropertyTextAlign = 'center' | 'left' | 'right';

export type TitleSection = 'title' | 'description';