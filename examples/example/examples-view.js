'use strict';

window.ExamplesView = Backbone.View.extend({
    block: "i-examples",

    el: 'body',

    'events': {
        'click .i-example-test__run': 'runTest'
    },

    'initialize': function(){
        this.listenTo(this.collection, "sync", this.render);
        this.listenTo(this.collection, "testsComplete", this.afterAllTests);
        this.nodes = {};
        this.$content = this.$el.find('.i-examples-container');
        this.$sidebar = this.$el.find('.i-examples-sidebar');
    },

    'runAllTests': function(){
        document.location.href = exampleState.url({'runtest': true});
    },

    'afterAllTests': function(){
        $('#mocha').show();
        $('.i-examples-container').get(0).scrollTop = 0;
    },

    'mochaClear': function(){
        this.$mocha = $('#mocha');
        this.$mocha.empty();
        mocha.suite.tests = [];
        mocha.suite.title = "";
    },

    'runTest': function(e){
        var elem = e.target,
            testSign  = elem.getAttribute('data-test'),
            blockName = elem.getAttribute('data-name'),
            testFunc  = tests[testSign],
            $container = $(".sign-"+testSign),
            view = this;
        this.mochaClear();

        it(blockName, testFunc);

        mocha.run(
            function(){
                $container.addClass('mocha');
                $('.mocha-report-'+testSign).remove();
                $_mocha = view.$mocha.find('#mocha-report').clone();
                $_mocha.removeAttr('id');
                $_mocha.attr('class', 'mocha-report ' + 'mocha-report-'+testSign);
                $container.find('.i-example-test__run').replaceWith($_mocha);
                view.$mocha.empty();
            }
        );
    },

    'render': function(){
        this.sidebar() && this.content();
        this.collection.trigger('render');
    },

    'sidebar': function(){
        this.$sidebar.empty();
        this.nodes['sidebar'] = $C.tpl[this.block + "__sidebar"].call(this.$sidebar[0], this.collection);

        this.listenToOnce(
            this.nodes['sidebar'].test,
            'action',
            this.runAllTests
        );

        this.listenToOnce(
            this.nodes['sidebar'].be,
            'change:selected',
            this.reload
        );

        this.listenToOnce(
            this.nodes['sidebar'].jz,
            'change:selected',
            this.reload
        );

        return true;
    },

    'reload': function(){
        location.href = exampleState.url({
            'framework': this.nodes['sidebar'].be.get('selected').get('name'),
            '$':         this.nodes['sidebar'].jz.get('selected').get('name')
        });
    },

    'content': function(){
        this.$content.empty();
        this.nodes['content'] = $C.tpl[this.block].call(this.$content[0], this.collection);
        if(this.nodes.test){
            this.listenToOnce(
                this.nodes.test,
                'action',
                this.showTests
            );
            this.collection.listenToOnce(
                this.nodes.test,
                'action',
                this.collection.runTest
            )
        }

        this.renderExamples();

        this.$content.on(
            'scroll',
            function(){
                $(document.body).trigger('scroll');
            }
        );

        Prism.highlightAll();

        return true;
    },

    'renderSUITE': function(suite){
        this.$(".sign-"+suite.sign).prepend( "<h4 id="+ exampleState.name(suite.name +'__'+ suite.opts) +">"+ suite.opts +"</h4>" );
    },

    'renderCODE': function(code){
        var $code = $("<div class='i-example-prism'/>"),
            $container = this.$(".sign-"+code.sign);

        $(this.$(".sign-"+code.sign).children().get(0)).wrap("<div class='i-example-container'/>");

        $container.append( $code );
        $container.prepend( "<h4 class=i-example-code__header>"+ code.opts +"</h4>" );
        $C.tpl['i-prism'].call($code.get(0), code.code.join('\n'), 'ctpl');
    },

    'renderTEST': function(test){
        var $code = $("<div class='i-example-prism'/>");
        this.$(".sign-"+test.sign).append( $code );
        this.$(".sign-"+test.sign).prepend( "<div class='i-pseudo i-example-test__run' data-test='"+test.sign+"' data-name='"+test.name+"'>test</div>" );
        $C.tpl['i-prism'].call($code.get(0), test.code.join('\n'), 'javascript');
    },

    'renderExample': function(example){

        var view = this;
        example
            .get('code')
            .forEach(
                function(code){
                    var renderer = "render" + code.type;
                    view[ renderer ].call(view, code)
                }
            );
    },

    'renderExamples': function(){
        return this.collection.forEach(this.renderExample.bind(this));
    }
});