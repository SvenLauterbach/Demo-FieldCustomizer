import * as React from 'react';
export interface IDemoCustomizerProps {
    number: number;
    listId: string;
    listItemId: number;
}
export interface IDemoCustomizerState {
    number: number;
}
export default class DemoCustomizer extends React.Component<IDemoCustomizerProps, {}> {
    state: IDemoCustomizerState;
    constructor(props: IDemoCustomizerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactElement<{}>;
    increase(event: React.MouseEvent<HTMLDivElement>): void;
}
