import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';


import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function datepicker_dayTpl($model) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $date, $day;
    return $C($ConkittyEnv.p).act(function $C_i_datepicker__day_44_5() {
        $date = $model.get('date');
    }).div({ 'class': 'i-datepicker__day' }).text(function $C_i_datepicker__day_46_9() {
        return $date.getDate();
    }).act(function $C_i_datepicker__day_47_9() {
        $day = $date.getDay() || 7;
    }).test(function $C_i_datepicker__day_50_14() {
        return $model === $model.collection.at(0);
    }).act(function () {
        var $this = $(this);
        window.setTimeout(function () {
            $this.parent().css('margin-left', ($day - 1) * 2 + 'em');
        }, 0);
    }).end(3);
}
