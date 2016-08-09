import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import buttonTpl from '../../button/button-tpl/button.tpl';
import '../../i/i';
import '../../i/i.less';
import '../button-group-fabric';
import '../button-group';
import '../button-group.less';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function buttonGroupTpl($data, $options) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $set, $buttonGroup, $item, $button;
    $C($ConkittyEnv.p).act(function $C_button_group_7_5() {
        $block = 'i-button-group';
    }).act(function $C_button_group_8_5() {
        $model = new ns.buttongroup($data, $options);
    }).act(function $C_button_group_9_5() {
        $set = $model.get('buttons');
    }).div().act(function () {
        $buttonGroup = this;
    }).attr('class', function $C_button_group_11_17() {
        return $block;
    }).choose().when(function $C_button_group_13_18() {
        return $set.length > 0;
    }).each(function $C_button_group_14_28() {
        return $set.models;
    }).act(function ($C_) {
        $item = $C_;
    }).act(function () {
        $button = buttonTpl.call(new $ConkittyEnvClass(this), $item);
    }).end(2).otherwise().attr('class', function () {
        return $ConkittyChange(this, $block + '__empty');
    }).end(3).act(function () {
        $model.view = new ns.views.buttongroup({
            'el': $buttonGroup,
            'model': $model
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
