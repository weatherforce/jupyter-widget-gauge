var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
let React = require('react');
let ReactDOM = require('react-dom');
let GaugeChart =require('react-gauge-chart').default;

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
var GaugeWidgetModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'GaugeWidgetModel',
        _view_name : 'GaugeWidgetView',
        _model_module : 'jupyter-widget-gauge',
        _view_module : 'jupyter-widget-gauge',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
		props: {}
    })
});


// Custom View. Renders the widget model.
var GaugeWidgetView = widgets.DOMWidgetView.extend({
	initiation: function(){
		this.gauge_container = document.createElement('div')
		this.gaugeElement = React.createElement(GaugeChart, this.model.get('props'))
		ReactDOM.render(this.gaugeElement, this.gauge_container)
		this.el.appendChild(this.gauge_container)
	},
    // Defines how the widget gets rendered into the DOM
    render: function() {
		this.initiation();
		this.stade_changed();
        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
		this.model.on('change:props', this.props_changed, this);
		this.model.on('change:stade', this.stade_changed, this);
		
    },

	props_changed: function(){
		this.gaugeElement = React.createElement(GaugeChart, this.model.get('props'))
		console.log(this.gaugeElement)
		ReactDOM.render(this.gaugeElement, this.gauge_container)
	},

	
	stade_changed: function(){
		let stade_container = document.createElement('p')
		stade_container.style ="text-align: center; font-size: 18px"
		stade_container.textContent = this.model.get('stade')
		this.el.appendChild(stade_container)
	}
});


module.exports = {
    GaugeWidgetModel: GaugeWidgetModel,
    GaugeWidgetView: GaugeWidgetView
};
