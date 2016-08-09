import ns from '../ns.js';
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


import check_labelTpl from './check-tpl/check_label.tpl';


ns.models.check = Backbone.Model.extend(
    {
        'defaults': {
            'size':     'M',
            'on':  false,
            'disabled': false,
            'label': '',
            'template': check_labelTpl
        }
    }
);
