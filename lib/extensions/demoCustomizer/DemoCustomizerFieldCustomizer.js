"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var pnp = require("sp-pnp-js");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var decorators_1 = require("@microsoft/decorators");
var sp_listview_extensibility_1 = require("@microsoft/sp-listview-extensibility");
var strings = require("DemoCustomizerFieldCustomizerStrings");
var DemoCustomizer_1 = require("./components/DemoCustomizer");
var LOG_SOURCE = 'DemoCustomizerFieldCustomizer';
var DemoCustomizerFieldCustomizer = (function (_super) {
    __extends(DemoCustomizerFieldCustomizer, _super);
    function DemoCustomizerFieldCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DemoCustomizerFieldCustomizer.prototype.onInit = function () {
        var _this = this;
        // Add your custom initialization to this method.  The framework will wait
        // for the returned promise to resolve before firing any BaseFieldCustomizer events.
        sp_core_library_1.Log.info(LOG_SOURCE, 'Activated DemoCustomizerFieldCustomizer with properties:');
        sp_core_library_1.Log.info(LOG_SOURCE, JSON.stringify(this.properties, undefined, 2));
        sp_core_library_1.Log.info(LOG_SOURCE, "The following string should be equal: \"DemoCustomizerFieldCustomizer\" and \"" + strings.Title + "\"");
        return _super.prototype.onInit.call(this).then(function (_) {
            return new Promise(function (resolve, reject) {
                pnp.setup({
                    spfxContext: _this.context
                });
                resolve();
            });
        });
        //return Promise.resolve();
    };
    DemoCustomizerFieldCustomizer.prototype.onRenderCell = function (event) {
        // Use this method to perform your custom cell rendering.
        var listId = this.context.pageContext.list.id.toString();
        var listItemId = event.listItem.getValueByName("ID");
        var numberValue = event.fieldValue === "" ? 0 : parseInt(event.fieldValue);
        var component = (React.createElement(DemoCustomizer_1.default, { number: numberValue, listId: listId, listItemId: listItemId }));
        ReactDOM.render(component, event.domElement);
    };
    DemoCustomizerFieldCustomizer.prototype.onDisposeCell = function (event) {
        // This method should be used to free any resources that were allocated during rendering.
        // For example, if your onRenderCell() called ReactDOM.render(), then you should
        // call ReactDOM.unmountComponentAtNode() here.
        ReactDOM.unmountComponentAtNode(event.domElement);
        _super.prototype.onDisposeCell.call(this, event);
    };
    __decorate([
        decorators_1.override
    ], DemoCustomizerFieldCustomizer.prototype, "onInit", null);
    __decorate([
        decorators_1.override
    ], DemoCustomizerFieldCustomizer.prototype, "onRenderCell", null);
    __decorate([
        decorators_1.override
    ], DemoCustomizerFieldCustomizer.prototype, "onDisposeCell", null);
    return DemoCustomizerFieldCustomizer;
}(sp_listview_extensibility_1.BaseFieldCustomizer));
exports.default = DemoCustomizerFieldCustomizer;

//# sourceMappingURL=DemoCustomizerFieldCustomizer.js.map
