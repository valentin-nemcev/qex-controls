import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function input_inputTpl($el, $model) {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).act(function () {
        $C($el, false, true).attr('class', function $C_input__input_40_16() {
            return 'i-input__input';
        }).attr('placeholder', function $C_input__input_41_22() {
            return $model.get('placeholder');
        }).test(function $C_input__input_42_14() {
            return $model.get('disabled');
        }).attr('disabled', 'disabled').end().choose().when(function $C_input__input_45_18() {
            return $model.get('mode') == 'textarea';
        }).text(function $C_input__input_46_17() {
            return $model.get('value');
        }).end().otherwise().attr('value', function $C_input__input_48_24() {
            return $model.get('value');
        }).end(3);
    }).end();
}
