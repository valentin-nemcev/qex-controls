import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import selectTpl from '../../select/select-tpl/select.tpl';
import datepicker_dayTpl from './datepicker_day.tpl';
import '../../i/i';
import '../../i/i.less';
import '../datepicker-fabric';
import '../datepicker-model';
import '../datepicker-view';
import '../datepicker.less';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function datepickerTpl($options) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $date, $month, $select;
    $C($ConkittyEnv.p).act(function $C_datepicker_8_5() {
        $date = ns.date($options);
    }).act(function $C_datepicker_9_5() {
        $month = new ns.sets.month([$date]);
    }).div({ 'class': 'i-datepicker' }).act(function () {
        $select = selectTpl.call(new $ConkittyEnvClass(this), {
    'placeholder': $date.get('placeholder'),
    'options': $month,
    'viewOption': datepicker_dayTpl
});
    }).act(function () {
        $select.select($date);
        $month.state.view = new ns.views.datepicker({
            'options': $month,
            'select': $select,
            'el': this
        });
    }).end().act(function () {
        $ConkittyTemplateRet = $month.state;
    }).end();
    return $ConkittyTemplateRet;
}
