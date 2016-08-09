import ns from '../ns.js';
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


ns.models.input = Backbone.Model.extend(
    {
        'defaults': {
            'placeholder': '',
            'size': 'M',
            'value': '',
            'disabled': false,
            'debounce': 0,
            'mode': 'input',
            'rows': 2
        }
    }
);
