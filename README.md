jupyter-widget-gauge
===============================

a Widget implemantation of react-gauge-chart to play with in your notebooks

Installation
------------

To install use pip:

    $ pip install jupyter_widget_gauge
    $ jupyter nbextension enable --py --sys-prefix jupyter_widget_gauge

To install for jupyterlab

    $ jupyter labextension install jupyter_widget_gauge

For a development installation (requires npm),

    $ git clone https://github.com/weatherforce/jupyter-widget-gauge.git
    $ cd jupyter-widget-gauge
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix jupyter_widget_gauge
    $ jupyter nbextension enable --py --sys-prefix jupyter_widget_gauge
    $ jupyter labextension install js

When actively developing your extension, build Jupyter Lab with the command:

    $ jupyter lab --watch

This take a minute or so to get started, but then allows you to hot-reload your javascript extension.
To see a change, save your javascript, watch the terminal for an update.

Note on first `jupyter lab --watch`, you may need to touch a file to get Jupyter Lab to open.


To use: 

Look at the Gauge_use.ipynb in the example folder.

