import ns from '../ns.js';
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


ns.models.tumbler = Backbone.Model.extend(
    {
        'defaults': {
            'size':     'M',
            'on':  false,
            'disabled': false
        }
    }
);
