import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function check_labelTpl($model) {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).text(function $C_i_check__label_38_5() {
        return $model.get('label');
    }).end();
}
