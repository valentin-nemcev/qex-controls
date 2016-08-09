import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import input_inputTpl from './input_input.tpl';
import '../../i/i';
import '../../i/i.less';
import '../input.less';
import '../input-fabric';
import '../input-model';
import '../input-view';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function inputTpl($data) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $wrapper, $clear;
    $C($ConkittyEnv.p).act(function $C_input_8_5() {
        $block = 'i-input';
    }).act(function $C_input_9_5() {
        $model = ns.input($data);
    }).div().act(function () {
        $wrapper = this;
    }).attr('class', function $C_input_11_17() {
        return $block;
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__size-' + $model.get('size'));
    }).test(function $C_input_13_14() {
        return !$model.get('value');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__empty');
    }).end().test(function $C_input_15_14() {
        return $model.get('disabled');
    }).attr('class', function () {
        return $ConkittyChange(this, $block + '__disabled');
    }).end().choose().when(function $C_input_18_18() {
        return $model.get('mode') == 'textarea';
    }).elem('textarea').attr('rows', function $C_input_20_27() {
        return $model.get('rows');
    }).act(function () {
        input_inputTpl.call(new $ConkittyEnvClass(this), this, $model);
    }).end(2).otherwise().elem('input').act(function () {
        input_inputTpl.call(new $ConkittyEnvClass(this), this, $model);
    }).end(3).div().act(function () {
        $clear = this;
    }).attr('class', function $C_input_26_20() {
        return $block + '__clear';
    }).end(2).act(function () {
        $model.view = new ns.views.input({
            'el': $wrapper,
            'model': $model
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
