import React from "react";
import { AttributeBase, ChildrenElementBase } from "../bases.type";

export interface IPropsForm extends AttributeBase,  ChildrenElementBase {
        onSubmit: React.FormEventHandler<HTMLFormElement>;

        redirect: string;

        method: MethodForm;
}

export type MethodForm = 'post' | 'get' | 'delete';