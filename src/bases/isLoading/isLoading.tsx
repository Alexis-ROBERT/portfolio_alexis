import React from 'react';
import { IPropsIsLoading, IStateIsLoading } from './isLoading.type';

export default class IsLoading extends React.Component<IPropsIsLoading, IStateIsLoading> {
        public constructor(public props: IPropsIsLoading) {
                super(props);

                this.state = {
                        isLoading: props.loading || true,
                };

                if (props.isLoading !== undefined) props.isLoading(this.state.isLoading);
        }

        public render(): React.ReactNode {
                return (
                    <div>
                            
                    </div>
                )
        }
}
