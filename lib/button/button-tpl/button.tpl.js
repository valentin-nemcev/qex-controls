import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import button_faceTpl from './button_face.tpl';
import '../../i/i';
import '../../i/i.less';
import '../button-fabric';
import '../button-model';
import '../button-view';
import '../button.less';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function buttonTpl($data) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $model, $button;
    $C($ConkittyEnv.p).act(function $C_button_8_5() {
        $model = ns.button($data);
    }).choose().when(function $C_button_10_14() {
        return $model.get('fake');
    }).div().act(function () {
        $button = this;
    }).attr('tabindex', '0').act(function () {
        button_faceTpl.call(new $ConkittyEnvClass(this), this, $model, $ConkittyEnv.l());
    }).end(2).otherwise().elem('button').act(function () {
        $button = this;
    }).attr('type', 'button').act(function () {
        button_faceTpl.call(new $ConkittyEnvClass(this), this, $model, $ConkittyEnv.l());
    }).end(3).act(function () {
        $model.view = new ns.views.button({
            'el': $button,
            'model': $model
        });
    }).act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
