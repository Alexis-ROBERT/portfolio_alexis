import React from "react";

export interface IPropsIsLoading {
        children: React.ReactNode;

        preload?: React.ReactNode;

        className?: string;

        style?: React.CSSProperties;

        isLoading?: (is: boolean) => any;

        loading?: boolean;
}

export interface IStateIsLoading {
        isLoading: boolean;
}
