import { BaseFieldCustomizer, IFieldCustomizerCellEventParameters } from '@microsoft/sp-listview-extensibility';
/**
 * If your field customizer uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IDemoCustomizerFieldCustomizerProperties {
    sampleText?: string;
}
export default class DemoCustomizerFieldCustomizer extends BaseFieldCustomizer<IDemoCustomizerFieldCustomizerProperties> {
    onInit(): Promise<void>;
    onRenderCell(event: IFieldCustomizerCellEventParameters): void;
    onDisposeCell(event: IFieldCustomizerCellEventParameters): void;
}
