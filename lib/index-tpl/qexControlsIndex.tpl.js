import ns from '../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import Tpl from '../../no_template';
import buttonGroupTpl from '../button-group/button-group-tpl/buttonGroup.tpl';
import checkTpl from '../check/check-tpl/check.tpl';
import datepickerTpl from '../datepicker/datepicker-tpl/datepicker.tpl';
import suggestTpl from '../suggest/suggest-tpl/suggest.tpl';
import tumblerTpl from '../tumbler/tumbler-tpl/tumbler.tpl';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function qexControlsIndexTpl() {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).act(function () {
        Tpl.call(new $ConkittyEnvClass(this));
    }).act(function () {
        buttonGroupTpl.call(new $ConkittyEnvClass(this));
    }).act(function () {
        checkTpl.call(new $ConkittyEnvClass(this));
    }).act(function () {
        datepickerTpl.call(new $ConkittyEnvClass(this));
    }).act(function () {
        suggestTpl.call(new $ConkittyEnvClass(this));
    }).act(function () {
        tumblerTpl.call(new $ConkittyEnvClass(this));
    }).end();
}
