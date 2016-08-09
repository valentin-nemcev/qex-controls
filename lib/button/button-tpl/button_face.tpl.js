import ns from '../../ns.js';
import $ from 'jquery';
import _ from 'underscore';

import button_labelTpl from './button_label.tpl';

import $C_env from '../../conkitty_env';
const [$C, $ConkittyEnvClass, $ConkittyGetEnv, $ConkittyClasses, $ConkittyMod, $ConkittyChange] = $C_env;

export default function button_faceTpl($parent, $model, $template) {
    var $ConkittyEnv = $ConkittyGetEnv(this), $block;
    return $C($ConkittyEnv.p).act(function $C_button__face_34_5() {
        $block = 'i-button';
    }).act(function () {
        $C($parent, false, true).attr('class', function $C_button__face_36_17() {
            return $block;
        }).attr('class', function () {
            return $ConkittyChange(this, $block + '__size-' + $model.get('size'));
        }).test(function $C_button__face_38_14() {
            return $model.get('loading');
        }).attr('class', function () {
            return $ConkittyChange(this, $block + '__loading');
        }).end().test(function $C_button__face_40_14() {
            return $model.get('action');
        }).attr('class', function () {
            return $ConkittyChange(this, $block + '__action');
        }).end().test(function $C_button__face_42_14() {
            return $model.get('alert');
        }).attr('class', function () {
            return $ConkittyChange(this, $block + '__alert');
        }).end().test(function $C_button__face_44_14() {
            return $model.get('checked');
        }).attr('class', function () {
            return $ConkittyChange(this, $block + '__checked');
        }).end().test(function $C_button__face_46_14() {
            return $model.isDisabled();
        }).attr('disabled', 'disabled').end().test(function $C_button__face_48_14() {
            return $model.get('tooltip');
        }).attr('title', function $C_button__face_49_20() {
            return $model.get('tooltip');
        }).end().div().attr('class', function $C_button__face_51_20() {
            return $block + '__face';
        }).choose().when(function $C_button__face_53_22() {
            return $model.get('template');
        }).act(function () {
            $model.get('template').call(this, $model);
        }).end().when(function $C_button__face_56_22() {
            return $model.get('label');
        }).act(function () {
            button_labelTpl.call(new $ConkittyEnvClass(this), $model);
        }).end().when(function $C_button__face_58_22() {
            return $template;
        }).act(function $C_button__face_59_21($C_) {
            if (($C_ = $template) instanceof Node) {
                this.appendChild($C_);
            } else {
                $C(this).text($C_, true).end();
            }
        }).end(4);
    }).end();
}
