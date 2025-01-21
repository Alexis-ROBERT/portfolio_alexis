import React from 'react';

export interface AttributeBase {
    className?: string;

    style?: React.CSSProperties;
}

export interface ImageAttributeBase {
    src: string;

    alt: string;
}

export interface VideoAttributeBase {
    src: string;

    control?: boolean;

    volume?: number;
}

export interface AnchorAttributeBase {
    to: string;

    title: string;

    target?: AnchorTargetAttribute;
}

export interface InputAttributeBase {
    placeholder?: string;
}

export type AnchorTargetAttribute = '_blank';

export interface ChildrenElementBase<T = unknown> {
    children: React.ReactNode & T;
}

export interface FocusHandleEvent<E> {
    onBlur?: FocusEventHandlerBase<E>;

    onFocus?: FocusEventHandlerBase<E>;
}

export interface MouseHandleEvent<E> {
    onMouseEnter?: MouseEventHandlerBase<E>;

    onMouseLeave?: MouseEventHandlerBase<E>;

    onMouseDown?: MouseEventHandlerBase<E>;

    onMouseUp?: MouseEventHandlerBase<E>;

    onClick?: MouseEventHandlerBase<E>;

    onMouseOut?: MouseEventHandlerBase<E>;

    onMouseOver?: MouseEventHandlerBase<E>;
}

export interface DragHandleEvent<E> {
    onDragOver?: React.DragEventHandler<E>;

    onDragLeave?: React.DragEventHandler<E>;

    onDragExit?: React.DragEventHandler<E>;

    onDragEnter?: React.DragEventHandler<E>;
}

export interface DragInfoDocument {
    type?: string;

    name?: string;
}

export interface PropsInteractableBase {
    pressed: boolean;
}

export interface StateInteractableBase {
    pressed: boolean;
}

export interface StateVisibleBase {
    visible: boolean;
}

export interface StateFocusBase {
    focus: boolean;
}

export interface StatePlayBase {
    play: boolean;
}

export interface PropsActivedBase {
    actived?: boolean;
}

export interface StateActivedBase {
    actived: boolean;
}

export interface PropsButtonBase extends AttributeBase, MouseHandleEvent<ButtonElement>, FocusHandleEvent<ButtonElement> {
}

export interface PropsVideoBase extends AttributeBase, VideoAttributeBase, MouseHandleEvent<Video> {
}

export interface PropsInputBase extends AttributeBase, InputAttributeBase, FocusHandleEvent<Input>, MouseHandleEvent<Input> {
}

export type ButtonMouseEventHandler<T = unknown> = MouseEventHandlerBase<ButtonElement> | T;
export type ButtonFocusEventHandler<T = unknown> = FocusEventHandlerBase<ButtonElement> | T;

export type IsUndefined = undefined;

export interface PropsAnchorsBase extends AttributeBase, AnchorAttributeBase, MouseHandleEvent<Anchor>, FocusHandleEvent<Anchor> {
}

export type AnchorMouseEventHandler = React.MouseEventHandler<Anchor>;

export type MouseEventBase<E> = React.MouseEvent<E, MouseEvent>;
export type MouseEventHandlerBase<E> = React.MouseEventHandler<E>;

export type DragEventBase<E> = React.DragEvent<E>;
export type DragEventHandlerBase<E> = React.DragEventHandler<E>;

export type FocusEventBase<E> = React.FocusEvent<E, Element>;
export type FocusEventHandlerBase<E> = React.FocusEventHandler<E>;

export type ButtonElement = HTMLButtonElement;
export type Anchor = HTMLAnchorElement;
export type Input = HTMLInputElement;
export type Div = HTMLDivElement;
export type Video = HTMLVideoElement;
