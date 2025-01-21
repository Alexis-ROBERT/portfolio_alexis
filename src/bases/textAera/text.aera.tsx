import React from 'react';
import { IPropsTextAera } from './text.aera.type';
import './_textAera.scss';

export default class TextAera extends React.Component<IPropsTextAera> {
        public constructor(props: IPropsTextAera) {
                super(props);
        }

        public render(): React.ReactNode {
                return <canvas className="text-aera-base" />;
        }
}
