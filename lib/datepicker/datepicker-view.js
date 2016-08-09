import ns from '../ns.js';
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


import datepicker_weekTpl from './datepicker-tpl/datepicker_week.tpl';
import datepicker_formTpl from './datepicker-tpl/datepicker_form.tpl';


ns.views.datepicker = Backbone.View.extend({
    'initialize': function(options) {
        this.select = options.select;
        this.options = options.options
        this.$popup = this.$('.i-popup');
        this.render();
        this.listenTo(
            this.select,
            'change:selected',
            this.proxySelected
        );
    },
    'proxySelected': function(select, selected) {
        selected && this.options.state.set(
            'selected',
            selected
        );
    },
    'render': function() {
        this.$popup.addClass('i-datepicker__popup');
        this.$popup.find('.i-select__options-list')
                   .addClass('i-datepicker__month');
        this.$popup.prepend(
            datepicker_weekTpl()
        );
        this.$form = $('<div>').addClass('i-datepicker__form')
                               .prependTo(this.$popup);
        this.listenTo(
            this.options,
            'sync',
            this.renderForm
        );
    },
    'renderForm': function() {
        //this.select.select(this.options.state.get('selected'));
        this.$form.empty();
        datepicker_formTpl.call(this.$form[0], this.options.state);
    }
});
