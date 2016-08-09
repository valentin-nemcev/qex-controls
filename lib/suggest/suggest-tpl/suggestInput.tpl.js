import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import suggestSelectedTpl from './suggestSelected.tpl';
import inputTpl from '../../input/input-tpl/input.tpl';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function suggestInputTpl($selected, $select) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $isCheck, $option, $value, $input;
    return $C($ConkittyEnv.p).act(function $C_i_suggest_input_42_5() {
        $isCheck = $select.get('mode') === 'check';
    }).test(function $C_i_suggest_input_43_11() {
        return $isCheck;
    }).each(function $C_i_suggest_input_44_23() {
        return $selected;
    }).act(function ($C_) {
        $option = $C_;
    }).act(function () {
        suggestSelectedTpl.call(new $ConkittyEnvClass(this), $option, $select);
    }).end(2).act(function $C_i_suggest_input_46_5() {
        $value = $selected && !$isCheck ? $select.getOptionLabel($selected) : '';
    }).act(function () {
        $input = inputTpl.call(new $ConkittyEnvClass(this), {
    'value': $value,
    'size': $select.get('size')
});
    }).act(function () {
        $select.set({
            'input': $input,
            'open': $select.isCheck() && $select.get('open')
        });
    }).end();
}
