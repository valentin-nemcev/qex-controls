import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function datepicker_weekTpl() {
    var $ConkittyEnv = $ConkittyGetEnv(this);
    return $C($ConkittyEnv.p).div({ 'class': 'i-datepicker__week' }).div({ 'class': 'i-datepicker__day' }).text('Mo').end().div({ 'class': 'i-datepicker__day' }).text('Tu').end().div({ 'class': 'i-datepicker__day' }).text('We').end().div({ 'class': 'i-datepicker__day' }).text('Th').end().div({ 'class': 'i-datepicker__day' }).text('Fr').end().div({ 'class': 'i-datepicker__day i-datepicker__day-weekend' }).text('Sa').end().div({ 'class': 'i-datepicker__day i-datepicker__day-weekend' }).text('Su').end(3);
}
