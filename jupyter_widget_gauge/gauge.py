import ipywidgets as widgets
from traitlets import Unicode, Dict


@widgets.register
class GaugeWidget(widgets.DOMWidget):
    """An example widget."""

    # Name of the widget view class in front-end
    _view_name = Unicode('GaugeWidgetView').tag(sync=True)

    # Name of the widget model class in front-end
    _model_name = Unicode('GaugeWidgetModel').tag(sync=True)

    # Name of the front-end module containing widget view
    _view_module = Unicode('jupyter-widget-gauge').tag(sync=True)

    # Name of the front-end module containing widget model
    _model_module = Unicode('jupyter-widget-gauge').tag(sync=True)

    # Version of the front-end module containing widget view
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    # Version of the front-end module containing widget model
    _model_module_version = Unicode('^0.1.0').tag(sync=True)

    # Widget specific property.
    # Widget properties are defined as traitlets. Any property tagged with
    # `sync=True`is automatically synced to the frontend *any* time it changes
    # in Python.
    # It is synced back to Python from the frontend *any* time the model is
    # touched.
    props = Dict(default_value={
       "nrOfLevels": 3,
       "percent": 0,
       "id": "gaugechart1"
    }).tag(sync=True)

    def __init__(self, props, **kwargs):
        super().__init__(**kwargs)
        self.props = props

    def percent(self, percent):
        self.props['percent'] = percent
