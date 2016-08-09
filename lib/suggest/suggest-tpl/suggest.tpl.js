import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import suggestSelectTpl from './suggestSelect.tpl';
import '../../i/i';
import '../../i/i.less';
import '../suggest-fabric';
import '../suggest-model';
import '../suggest-view';
import '../suggest.less';

import $C_env from 'conkitty-env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function suggestTpl($data, $options) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $ConkittyTemplateRet, $block, $model, $suggest, $select;
    $C($ConkittyEnv.p).act(function $C_suggest_8_5() {
        $block = 'i-suggest';
    }).act(function $C_suggest_9_5() {
        $model = ns.suggest($data, $options);
    }).div({ 'class': 'i-suggest' }).act(function () {
        $suggest = this;
    }).test(function $C_suggest_11_14() {
        return $model.get('param');
    }).attr('class', function () {
        return $ConkittyChange(this, 'i-suggest__param');
    }).end().test(function $C_suggest_13_14() {
        return $model.get('loading');
    }).attr('class', function () {
        return $ConkittyChange(this, 'i-suggest__loading');
    }).end().act(function () {
        $select = suggestSelectTpl.call(new $ConkittyEnvClass(this), $model);
    }).act(function () {
        $model.set('select', $select);
        $model.view = new ns.views.suggest({
            'el': $suggest,
            'model': $model
        });
    }).end().act(function () {
        $ConkittyTemplateRet = $model;
    }).end();
    return $ConkittyTemplateRet;
}
