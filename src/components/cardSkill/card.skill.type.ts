import React from 'react';
import type {AttributeBase, ImageAttributeBase} from '@bases/bases.type';
import type {IPropsTextField} from '@bases/textField/text.field.type';

export interface IPropsCardSkill extends AttributeBase, ImageAttributeBase {
    title: string;

    children: React.ReactElement<IPropsTextField>;
}

export interface IStateCardSkill {
    topLine: boolean;

    bottomLine: boolean;
}
