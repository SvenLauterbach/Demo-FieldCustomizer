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
var sp_core_library_1 = require("@microsoft/sp-core-library");
var decorators_1 = require("@microsoft/decorators");
var React = require("react");
var pnp = require("sp-pnp-js");
var DemoCustomizer_module_scss_1 = require("./DemoCustomizer.module.scss");
var LOG_SOURCE = 'DemoCustomizer';
var DemoCustomizer = (function (_super) {
    __extends(DemoCustomizer, _super);
    function DemoCustomizer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = null;
        _this.state = { number: props.number };
        return _this;
    }
    DemoCustomizer.prototype.componentDidMount = function () {
        sp_core_library_1.Log.info(LOG_SOURCE, 'React Element: DemoCustomizer mounted');
    };
    DemoCustomizer.prototype.componentWillUnmount = function () {
        sp_core_library_1.Log.info(LOG_SOURCE, 'React Element: DemoCustomizer unmounted');
    };
    DemoCustomizer.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: DemoCustomizer_module_scss_1.default.cell },
            React.createElement("span", null, this.state.number),
            React.createElement("div", { onClick: function (e) { return _this.increase(e); } }, "increase")));
    };
    DemoCustomizer.prototype.increase = function (event) {
        var _this = this;
        event.stopPropagation();
        pnp.sp.web.lists
            .getById(this.props.listId)
            .items
            .getById(this.props.listItemId).update({
            Percent: this.state.number++
        })
            .then(function (_) { return _this.setState(_this.state); });
    };
    __decorate([
        decorators_1.override
    ], DemoCustomizer.prototype, "componentDidMount", null);
    __decorate([
        decorators_1.override
    ], DemoCustomizer.prototype, "componentWillUnmount", null);
    __decorate([
        decorators_1.override
    ], DemoCustomizer.prototype, "render", null);
    return DemoCustomizer;
}(React.Component));
exports.default = DemoCustomizer;

//# sourceMappingURL=DemoCustomizer.js.map
