ns.models.check = Backbone.Model.extend(
    {
        'defaults': {
            'size':     'M',
            'on':  false,
            'disabled': false,
            'label': '',
            'template': $C.tpl['i-check__label']
        }
    }
);