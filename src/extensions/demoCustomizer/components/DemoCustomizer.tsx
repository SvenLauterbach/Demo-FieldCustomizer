import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import * as React from 'react';
import * as pnp from 'sp-pnp-js';

import styles from './DemoCustomizer.module.scss';

export interface IDemoCustomizerProps {
  number: number;
  listId: string;
  listItemId: number;
}

export interface IDemoCustomizerState {
  number: number;
}

const LOG_SOURCE: string = 'DemoCustomizer';

export default class DemoCustomizer extends React.Component<IDemoCustomizerProps, {}> {

  public state: IDemoCustomizerState = null;

  constructor(props: IDemoCustomizerProps) {
    super(props);

    this.state = { number: props.number };
  }

  @override
  public componentDidMount(): void {
    Log.info(LOG_SOURCE, 'React Element: DemoCustomizer mounted');
  }

  @override
  public componentWillUnmount(): void {
    Log.info(LOG_SOURCE, 'React Element: DemoCustomizer unmounted');
  }

  @override
  public render(): React.ReactElement<{}> {
    return (
      <div className={styles.cell}>
        <span>{this.state.number}</span>
        <div onClick={e => this.increase(e) }>increase</div>
      </div>
    );
  }

  public increase(event: React.MouseEvent<HTMLDivElement>): void {

    event.stopPropagation();
    
    pnp.sp.web.lists
      .getById(this.props.listId)
      .items
      .getById(this.props.listItemId).update({
        Percent: this.state.number++
      })
      .then(_ => this.setState(this.state))
  }
}
