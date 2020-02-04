var plugin = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyter-widget-gauge',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-widget-gauge',
          version: plugin.version,
          exports: plugin
      });
  },
  autoStart: true
};

