import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import selectTpl from '../../select/select-tpl/select.tpl';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function suggestSelectTpl($model) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $options, $select;
    $C($ConkittyEnv.p).act(function $C_i_suggest_select_28_5() {
        $options = {
            'options': $model.get('data'),
            'size': $model.get('size'),
            'viewButton': $model.get('viewButton'),
            'viewOption': $model.get('viewOption'),
            'mode': $model.get('mode'),
            'disabled': $model.get('disabled'),
            'popup': $model.get('popup'),
            'allowEmpty': true
        };
    }).act(function () {
        $select = selectTpl.call(new $ConkittyEnvClass(this), $options);
    }).act(function () {
        $ConkittyTemplateRet = $select;
    }).end();
    return $ConkittyTemplateRet;
}
