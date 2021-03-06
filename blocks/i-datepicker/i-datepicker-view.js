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
            $C.tpl['i-datepicker__week']()
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
        $C.tpl['i-datepicker__form'].call(
            this.$form[0],
            this.options.state
        );
    }
});
