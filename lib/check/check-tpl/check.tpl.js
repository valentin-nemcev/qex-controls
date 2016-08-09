import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import buttonTpl from '../../button/button-tpl/button.tpl';
import '../../i/i';
import '../../i/i.less';
import '../check-model';
import '../check-view';
import '../check.less';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function checkTpl($data) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $check, $button;
    $C($ConkittyEnv.p).act(function $C_check_7_5() {
        $block = 'i-check';
    }).act(function $C_check_8_5() {
        $model = new ns.models.check($data);
    }).div().act(function () {
        $check = this;
    }).attr('class', function $C_check_10_17() {
        return $block;
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__size-' + $model.get('size'));
    }).test(function $C_check_12_14() {
        return $model.get('disabled');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '_disabled');
    }).end().test(function $C_check_14_14() {
        return $model.get('on');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '_state_on');
    }).end().div().attr('class', function $C_check_17_20() {
        return $block + '__button';
    }).act(function () {
        $button = buttonTpl.call(new $ConkittyEnvClass(this), {
    'size': $model.get('size'),
    'checked': $model.get('on'),
    'disabled': $model.get('disabled')
});
    }).end().div().attr('class', function $C_check_24_20() {
        return $block + '__label';
    }).act(function () {
        $model.get('template').call(this, $model);
    }).end(2).act(function () {
        $model.view = new ns.views.check({
            'el': $check,
            'model': $model,
            'button': $button
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
