var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
let React = require('react');
let ReactDOM = require('react-dom');
let GaugeChart =require('react-gauge-chart').default;

console.log("here is the gaugechart variable")
console.log(GaugeChart)
// See example.py for the kernel counterpart to this file.


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
    // Defines how the widget gets rendered into the DOM
    render: function() {
		this.props_changed();
        // Observe changes in the value traitlet in Python, and define
        // a custom callback.
		this.model.on('change:props', this.props_changed, this);
    },

	props_changed: function(){
		console.log(this.model.get('props'));
		let gauge_container = document.createElement('div')
		ReactDOM.render(React.createElement(GaugeChart, this.model.get('props')), gauge_container)
		this.el.appendChild(gauge_container)
	}
});


module.exports = {
    GaugeWidgetModel: GaugeWidgetModel,
    GaugeWidgetView: GaugeWidgetView
};
