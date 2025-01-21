import React from 'react';

export interface IPropsCarousel {
        children: React.ReactNode;

        display?: CarouselPropertyDisplay;

        className?: string;

        style?: React.CSSProperties;

        transition?: number;

        delay?: number;
}

export interface IStateCarousel {
        actived: boolean;

        translate: number;
}

export type CarouselPropertyDisplay = 'flex' | 'block';
