import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import buttonTpl from '../../button/button-tpl/button.tpl';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function datepicker_formTpl($state) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $month, $monthNames, $prev, $next;
    return $C($ConkittyEnv.p).act(function $C_i_datepicker__form_64_5() {
        $month = $state.get('month');
    }).act(function $C_i_datepicker__form_65_5() {
        $monthNames = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Septemper',
            'October',
            'November',
            'December'
        ];
    }).div({ 'class': 'i-datepicker__form-prev' }).act(function () {
        $prev = buttonTpl.call(new $ConkittyEnvClass(this), { label: '' });
    }).end().div({ 'class': 'i-datepicker__form-title' }).text(function $C_i_datepicker__form_84_9() {
        return $monthNames[$month] + ' ' + $state.get('year');
    }).end().div({ 'class': 'i-datepicker__form-next' }).act(function () {
        $next = buttonTpl.call(new $ConkittyEnvClass(this), { label: '' });
    }).end().act(function () {
        $prev.on('action', function () {
            $state.set('month', $month - 1);
        });
        $next.on('action', function () {
            $state.set('month', $month + 1);
        });
    }).end();
}
