import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function suggestSelectedTpl($option, $select) {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).div({ 'class': 'i-suggest-selected' }).div({ 'class': 'i-suggest-selected__text' }).text(function $C_i_suggest_selected_61_13() {
        return $select.getOptionLabel($option);
    }).end().div({ 'class': 'i-suggest-selected__cross' }).text('\xD7').act(function () {
        $(this).on('mousedown', function (e) {
            e.stopPropagation();
        });
        $(this).on('mouseup', function (e) {
            e.stopPropagation();
            $select.select($option);
        });
    }).end(3);
}
