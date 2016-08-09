import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import buttonTpl from '../../button/button-tpl/button.tpl';
import popupTpl from '../../popup/popup-tpl/popup.tpl';
import select_optionsListTpl from './select_optionsList.tpl';
import '../../i/i';
import '../../i/i.less';
import '../select-fabric';
import '../select-model';
import '../select-view';
import '../select-options-view';
import '../select.less';
import '../select-options.less';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function selectTpl($data, $options) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $popupOptions, $select, $button, $popup, $optionsList;
    $C($ConkittyEnv.p).act(function $C_select_11_5() {
        $block = 'i-select';
    }).act(function $C_select_12_5() {
        $model = ns.select($data, $options);
    }).act(function $C_select_13_5() {
        $popupOptions = $model.get('popup') || {};
    }).div().act(function () {
        $select = this;
    }).attr('class', function $C_select_16_17() {
        return $block;
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__empty');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__size-' + $model.get('size'));
    }).test(function $C_select_19_14() {
        return $model.get('disabled');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__disabled');
    }).end().act(function () {
        $button = buttonTpl.call(new $ConkittyEnvClass(this), {
    'label': $model.get('label') || $model.get('placeholder'),
    'size': $model.get('size'),
    'disabled': $model.get('disabled'),
    'template': $model.get('viewButton') ? function (button) {
        var select = button.get('select');
        return $model.get('viewButton').call(this, select.get('selected'), select);
    } : void 0,
    'select': $model,
    'fake': true
});
    }).act(function () {
        $popupOptions.owner = this.firstChild;
        $popupOptions.mode = 'click';
        $popupOptions.disabled = $model.get('disabled');
    }).act(function () {
        $popup = popupTpl.call(new $ConkittyEnvClass(this, function () {
    return $C().act(function () {
        $optionsList = select_optionsListTpl.call(new $ConkittyEnvClass(this), $model);
    }).end();
}), $popupOptions);
    }).end().act(function () {
        $model.view = new ns.views.select({
            'el': $select,
            'model': $model,
            '$button': $button,
            '$popup': $popup,
            '$list': $optionsList
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
