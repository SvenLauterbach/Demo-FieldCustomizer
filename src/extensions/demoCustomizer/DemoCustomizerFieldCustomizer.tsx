import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as pnp from 'sp-pnp-js';

import { Log } from '@microsoft/sp-core-library';
import { override } from '@microsoft/decorators';
import {
  BaseFieldCustomizer,
  IFieldCustomizerCellEventParameters
} from '@microsoft/sp-listview-extensibility';

import * as strings from 'DemoCustomizerFieldCustomizerStrings';
import DemoCustomizer, { IDemoCustomizerProps } from './components/DemoCustomizer';

/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDemoCustomizerFieldCustomizerProperties {
  // This is an example; replace with your own property
  sampleText?: string;
}

const LOG_SOURCE: string = 'DemoCustomizerFieldCustomizer';

export default class DemoCustomizerFieldCustomizer
  extends BaseFieldCustomizer<IDemoCustomizerFieldCustomizerProperties> {

  @override
  public onInit(): Promise<void> {
    // Add your custom initialization to this method.  The framework will wait
    // for the returned promise to resolve before firing any BaseFieldCustomizer events.
    Log.info(LOG_SOURCE, 'Activated DemoCustomizerFieldCustomizer with properties:');
    Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
    Log.info(LOG_SOURCE, `The following string should be equal: "DemoCustomizerFieldCustomizer" and "${strings.Title}"`);

    return super.onInit().then(_ => {
				return new Promise<void>((resolve, reject) => {
					pnp.setup({
						spfxContext: this.context
					});
					resolve();
				});
			});
    //return Promise.resolve();
  }

  @override
  public onRenderCell(event: IFieldCustomizerCellEventParameters): void {
    // Use this method to perform your custom cell rendering.
    const listId: string = this.context.pageContext.list.id.toString();
    const listItemId: number = event.listItem.getValueByName("ID");
    const numberValue: number = event.fieldValue === "" ? 0 : parseInt(event.fieldValue);
    
    let component = (<DemoCustomizer number={numberValue} listId={listId} listItemId={listItemId} />)

    ReactDOM.render(component, event.domElement);
  }

  @override
  public onDisposeCell(event: IFieldCustomizerCellEventParameters): void {
    // This method should be used to free any resources that were allocated during rendering.
    // For example, if your onRenderCell() called ReactDOM.render(), then you should
    // call ReactDOM.unmountComponentAtNode() here.
    ReactDOM.unmountComponentAtNode(event.domElement);
    super.onDisposeCell(event);
  }
}
