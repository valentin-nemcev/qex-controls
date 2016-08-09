import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function button_labelTpl($model) {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).span({ 'class': 'i-button__label' }).text(function $C_i_button__label_31_9() {
        return $model.get('label');
    }).end(2);
}
