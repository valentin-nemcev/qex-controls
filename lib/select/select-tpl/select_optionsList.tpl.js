import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function select_optionsListTpl($select) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $optionsList, $list;
    $C($ConkittyEnv.p).ul({ 'class': 'i-select__options-list' }).act(function () {
        $list = this;
    }).end().act(function () {
        $optionsList = new ns.views.selectOptions({
            'el': $list,
            'model': $select
        });
    }).act(function () {
        $ConkittyTemplateRet = $optionsList;
    }).end();
    return $ConkittyTemplateRet;
}
