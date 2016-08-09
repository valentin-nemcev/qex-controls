import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import '../popup.less';
import '../popup-model';
import '../popup-view';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function popupTpl($data) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $model, $popup, $className, $view;
    $C($ConkittyEnv.p).act(function $C_popup_5_5() {
        $model = 'get' in $data ? $data : new ns.models.popup($data);
    }).div({ 'class': 'i-popup' }).act(function () {
        $popup = this;
    }).act(function $C_popup_7_9() {
        $className = $model.get('className');
    }).test(function $C_popup_8_15() {
        return $className;
    }).attr('class', function () {
        return $ConkittyChange(this, $className);
    }).end().test(function $C_popup_10_14() {
        return $model.get('tail');
    }).div({ 'class': 'i-popup__tail' }).end(2).act(function () {
        $ConkittyEnv.l(this);
    }).end().act(function $C_popup_13_5() {
        $view = new ns.views.popup({
            'model': $model,
            'el': $popup
        });
    }).act(function () {
        $ConkittyTemplateRet = $view;
    }).end();
    return $ConkittyTemplateRet;
}
