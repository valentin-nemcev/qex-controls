import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import buttonTpl from '../../button/button-tpl/button.tpl';
import '../../i/i';
import '../../i/i.less';
import '../tumbler-model';
import '../tumbler-view';
import '../tumbler.less';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function tumblerTpl($data) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $tumbler, $button;
    $C($ConkittyEnv.p).act(function $C_tumbler_7_5() {
        $block = 'i-tumbler';
    }).act(function $C_tumbler_8_5() {
        $model = new ns.models.tumbler($data);
    }).div().act(function () {
        $tumbler = this;
    }).attr('class', function $C_tumbler_10_17() {
        return $block;
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__size-' + $model.get('size'));
    }).test(function $C_tumbler_12_14() {
        return $model.get('disabled');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '_disabled');
    }).end().test(function $C_tumbler_14_14() {
        return $model.get('on');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '_state_on');
    }).end().div().attr('class', function $C_tumbler_17_20() {
        return $block + '__on';
    }).end().div().attr('class', function $C_tumbler_19_20() {
        return $block + '__button';
    }).act(function () {
        $button = buttonTpl.call(new $ConkittyEnvClass(this), {
    'size': $model.get('size'),
    'disabled': $model.get('disabled')
});
    }).end().div().attr('class', function $C_tumbler_25_20() {
        return $block + '__off';
    }).end(2).act(function () {
        $model.view = new ns.views.tumbler({
            'el': $tumbler,
            'model': $model,
            'button': $button
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
